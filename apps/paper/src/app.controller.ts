import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { delay, of } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ cmd: 'ping' })
  ping(arg: any) {
    console.log("service-ppr")
    return of('pong').pipe(delay(500));
  }

  @Get('/ping-gateway')
  pingServiceA() {
    console.log("apigateway - ping to service-a")
    return this.appService.pingServiceA();
  }
}
