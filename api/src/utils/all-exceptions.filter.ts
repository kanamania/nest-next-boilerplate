import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

export class BusinessException extends Error {
  public readonly id: string;
  public readonly timestamp: Date;

  constructor(
    public readonly message: string,
    public readonly apiMessage: string,
    public readonly status: HttpStatus,
  ) {
    super(message);
    this.id = BusinessException.genId();
    this.timestamp = new Date();
  }

  private static genId(length = 16): string {
    const p = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return [...Array(length)].reduce(
      (a) => a + p[~~(Math.random() * p.length)],
      '',
    );
  }
}
export interface ApiError {
  id: string;
  message: string;
  timestamp: Date;
}

@Catch(Error)
export class CustomExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(CustomExceptionFilter.name);

  catch(exception: Error, host: ArgumentsHost) {
    let body: ApiError;
    let status: HttpStatus;

    if (exception instanceof HttpException) {
      // We can extract internal message & status from NestJS errors
      // Useful with class-validator
      body = new BusinessException(
        exception.message,
        exception.message, // Or generic message if you like
        exception.getStatus(),
      );
      status = exception.getStatus();
      console.log({ exception });
    } else {
      // For all other exceptions simply return 500 error
      console.log({ exception });
      body = new BusinessException(
        `Internal error occurred: ${exception.message}`,
        `Internal error occurred: ${exception.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
      status = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // Logs will contain an error identifier as well as
    // request path where it has occurred
    this.logger.error(
      `Got an exception: ${JSON.stringify({
        path: request.url,
        ...body,
      })}`,
    );
    response.status(status).json(body);
  }
}
