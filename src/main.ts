import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule, { logger: false });
  await app.listen(3000);
  return app;
}

async function bootstrap(): Promise<void> {
  global.gc();
  console.log(formattedMem());
  for (let i = 0; i < 100; i++) {
    const app = await createApp();
    await app.close();
  }
  global.gc();
  console.log(formattedMem());
}
bootstrap().catch(console.error);

function bytesToSize(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) {
    return '0 Bytes';
  }
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
}

function formattedMem() {
  const usage = process.memoryUsage();
  return {
    rss: bytesToSize(usage.rss),
    heapTotal: bytesToSize(usage.heapTotal),
    heapUsed: bytesToSize(usage.heapUsed),
  };
}
