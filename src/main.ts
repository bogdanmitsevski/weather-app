import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { sequelize } from './db/models';

async function bootstrap() {
  await sequelize.sync();
  await sequelize.authenticate();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT).then(() => {
    console.log('Server is working on PORT',process.env.PORT)
  });
}
bootstrap();
