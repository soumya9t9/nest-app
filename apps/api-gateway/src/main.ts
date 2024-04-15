import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  const microserviceTcp = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: 3000
    }
  })
  console.log('port : 3000');
  // await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
