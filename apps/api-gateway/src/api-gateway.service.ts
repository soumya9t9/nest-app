import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class ApiGatewayService {

  constructor(
    @Inject('SERVICE_A') private readonly clientServiceA: ClientProxy,
  ) { }

  getHello(): string {
    return 'Hello World! api gateway';
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
