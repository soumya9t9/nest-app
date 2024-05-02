import { Injectable } from '@nestjs/common';
import { Observable, from, of } from 'rxjs';
import { Workbook } from 'exceljs';

@Injectable()
export class ExcelService {

  constructor(
  ) { }

  downloadExcel(data): Observable<any> {
    const workbook = new Workbook
    // create first sheet with file name exceljs-example
    const worksheet = workbook.addWorksheet('exceljs-example');

    worksheet.columns = [
      { header: 'Route', key: 'route' },
      { header: 'Origin Country', key: 'originCountry' },
      { header: 'Origin City L', key: 'originCity' },
      { header: 'Destination Country', key: 'destinationCountry' },
      { header: 'Destination City', key: 'destinationCity' }
    ]

    data.forEach((val, i, _) => {
      worksheet.addRow(val)
    })
    const buffer = from(workbook.xlsx.writeBuffer());
    return buffer;
  }

}
