import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Feature1Service } from './feature1.service';
import { CreateFeature1Dto } from './dto/create-feature1.dto';
import { UpdateFeature1Dto } from './dto/update-feature1.dto';

@Controller()
export class Feature1Controller {
  constructor(private readonly feature1Service: Feature1Service) {}

  @MessagePattern('createFeature1')
  create(@Payload() createFeature1Dto: CreateFeature1Dto) {
    return this.feature1Service.create(createFeature1Dto);
  }

  @MessagePattern('findAllFeature1')
  findAll() {
    return this.feature1Service.findAll();
  }

  @MessagePattern('findOneFeature1')
  findOne(@Payload() id: number) {
    return this.feature1Service.findOne(id);
  }

  @MessagePattern('updateFeature1')
  update(@Payload() updateFeature1Dto: UpdateFeature1Dto) {
    return this.feature1Service.update(updateFeature1Dto.id, updateFeature1Dto);
  }

  @MessagePattern('removeFeature1')
  remove(@Payload() id: number) {
    return this.feature1Service.remove(id);
  }
}
