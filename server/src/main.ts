import * as env from 'dotenv';
import * as handlebars from 'hbs';
import * as handlebarsUtils from 'hbs-utils';
import * as cookieParser from 'cookie-parser';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app/module';

async function bootstrap() {
  env.config({ override: true });

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  handlebarsUtils(handlebars).registerPartials(
    join(__dirname, '..', 'views/layout'),
  );
  handlebarsUtils(handlebars).registerWatchedPartials(
    join(__dirname, '..', 'views/layout'),
  );
  handlebarsUtils(handlebars).registerPartials(
    join(__dirname, '..', 'views/components'),
  );
  handlebarsUtils(handlebars).registerWatchedPartials(
    join(__dirname, '..', 'views/components'),
  );

  app.use(cookieParser());

  app.enableCors();

  await app.listen(process.env.PORT);
}
bootstrap();
