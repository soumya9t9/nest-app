import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { delay, of } from 'rxjs';
import { ExcelService } from './excel.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly excelService: ExcelService
  ) { }

  @Get('/hello')
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
    return this.appService.getHello();
    // return this.appService.pingGateway();
  }

  @Get('/excel/download')
  downloadExcel(@Res() res) {
    console.log("api - download excel")
    let data = [
      {
        route: "INDEL-INMBI",
        originCountry: "India",
        originCity: "Delhi",
        destinationCountry: "India",
        destinationCity: "Mumbai",
      }
    ]
    return this.excelService.downloadExcel(data).subscribe((buffer) => {
      return res.set('Content-Disposition', `attachment; filename=example.xlsx`).send(buffer);
    });
    // return this.excelService.downloadExcel(data);
  }
}
