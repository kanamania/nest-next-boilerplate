import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app
    .listen(process.env.PORT)
    .then(() => {
      console.log('successfully stared on port ' + process.env.PORT);
    })
    .catch((error) => {
      console.log(error);
    });
}
bootstrap();
