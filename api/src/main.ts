import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import { CustomExceptionFilter } from './utils/all-exceptions.filter';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bodyParser = require('body-parser');
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  app.useGlobalFilters(new CustomExceptionFilter());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(bodyParser.json());
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
