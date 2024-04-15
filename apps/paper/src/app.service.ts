import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { delay, map, of } from 'rxjs';

@Injectable()
export class AppService {

  constructor(
    @Inject('SERVICE_GATEWAY') private readonly clientServiceA: ClientProxy,
  ) { }

  getHello(): string {
    return 'Hello World! service_a';
  }

  @MessagePattern({ cmd: 'ping' })
  ping(arg: any) {
    console.log("service-ppr")
    return of('pong').pipe(delay(500));
  }

  pingServiceA() {
    const startTs = Date.now();
    const pattern = { cmd: 'ping' };
    const payload = {};
    return this.clientServiceA
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message, duration: Date.now() - startTs })),
      );
  }

}
