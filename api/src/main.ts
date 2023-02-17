import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import { AllExceptionsFilter } from './utils/all-exceptions.filter';
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  app
    .listen(process.env.PORT)
    .then(() => {
      console.log('successfully stared on port ' + process.env.PORT);
    })
    .catch((error) => {
      console.log('bootstrap error');
      console.log(error);
    });
}
bootstrap();
