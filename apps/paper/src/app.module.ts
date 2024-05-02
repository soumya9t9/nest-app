import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ExcelService } from './excel.service';
import { Feature1Module } from './feature1/feature1.module';

@Module({
  imports: [
    // ClientsModule.register([ 
    //   {
    //     name: 'SERVICE_GATEWAY',
    //     transport: Transport.TCP,
    //     options: {
    //       host: '127.0.0.1',
    //       port: 3000,
    //     },
    //   },
    // ]),
    Feature1Module,
  ],
  controllers: [AppController],
  providers: [AppService, ExcelService],
})
export class AppModule {}
