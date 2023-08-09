import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';

export const fs = require('fs');
export const usersPath = join(__dirname, '..', 'db/users.json');
export var solves = JSON.parse(fs.readFileSync(usersPath, 'utf8'));

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(80);
}
bootstrap();
