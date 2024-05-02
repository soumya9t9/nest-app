import { Injectable } from '@nestjs/common';
import { CreateFeature1Dto } from './dto/create-feature1.dto';
import { UpdateFeature1Dto } from './dto/update-feature1.dto';

@Injectable()
export class Feature1Service {
  create(createFeature1Dto: CreateFeature1Dto) {
    return 'This action adds a new feature1';
  }

  findAll() {
    return `This action returns all feature1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} feature1`;
  }

  update(id: number, updateFeature1Dto: UpdateFeature1Dto) {
    return `This action updates a #${id} feature1`;
  }

  remove(id: number) {
    return `This action removes a #${id} feature1`;
  }
}
