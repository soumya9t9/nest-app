import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options:{
      host: '127.0.0.1',
      port: 4300
    }
  })
  
  await app.startAllMicroservices()
  await app.listen(4300);
  console.log(`App is running on port ${await app.getUrl()}`)

  const config = new DocumentBuilder()
  .setTitle('Rest Apis')
  .setDescription('API description')
  // .addServer('http://localhost:3001/', 'Local environment')
  .setVersion('1.0')
  // .addTag('hit')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
}
bootstrap2();

async function bootstrap2() {
  
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 4300
    }
  })

  await app.startAllMicroservices();
  await app.listen(4300);
  console.log(`port : pap - 3001 - ${await app.getUrl()}`);
  
  const config = new DocumentBuilder()
  .setTitle('Rest Apis')
  .setDescription('API description')
  // .addServer('http://localhost:3001/', 'Local environment')
  .setVersion('1.0')
  // .addTag('hit')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
}