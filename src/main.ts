import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { formattedMem } from './mem.util';

async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule, { logger: false });
  await app.listen(3000);
  return app;
}

async function bootstrap(): Promise<void> {
  global.gc();
  console.log(formattedMem());
  for (let i = 0; i < 1000; i++) {
    const app = await createApp();
    await app.close();
  }
  global.gc();
  console.log(formattedMem());
}
bootstrap().catch(console.error);
