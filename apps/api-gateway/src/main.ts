import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(ApiGatewayModule);

  const config = new DocumentBuilder()
  .setTitle('Rest Apis')
  .setDescription('API description')
  // .addServer('http://localhost:3001/', 'Local environment')
  .setVersion('1.0')
  // .addTag('hit')
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3200);
  console.log(`Application is running on: ${await app.getUrl()}`)
}
// bootstrap();
bootstrap_old()

async function bootstrap_old() {
  const app = await NestFactory.create(ApiGatewayModule);

  // const microserviceTcp = app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.TCP,
  //   options: {
  //     host: 'localhost',
  //     port: 3002
  //   }
  // })
  // console.log('port : 3000');
  
  const config = new DocumentBuilder()
  .setTitle('Rest Apis')
  .setDescription('API description')
  // .addServer('http://localhost:3001/', 'Local environment')
  .setVersion('1.0')
  // .addTag('hit')
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  // await app.startAllMicroservices();
  // await app.startAllMicroservicesAsync();
  await app.listen(3000);
  
  console.log(`port : gate - 3000 - ${await app.getUrl()}`);
} 