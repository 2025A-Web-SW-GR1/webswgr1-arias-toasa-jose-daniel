import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as sessionFileStore from 'session-file-store';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const FileStore = sessionFileStore(session);
  app.use(
    session({
      secret: 'secreto-seguro',
      resave: false,
      saveUninitialized: false,
      store: new FileStore({
        path: './sessions',
        ttl: 3600,
      }),
      cookie: {
        maxAge: 3600000,
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
      },
    })
  )

  app.set('view engine', 'ejs');
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
  app.useStaticAssets(path.join(__dirname, '..', 'public'));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
