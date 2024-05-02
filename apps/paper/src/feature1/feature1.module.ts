import { Module } from '@nestjs/common';
import { Feature1Service } from './feature1.service';
import { Feature1Controller } from './feature1.controller';

@Module({
  controllers: [Feature1Controller],
  providers: [Feature1Service],
})
export class Feature1Module {}
