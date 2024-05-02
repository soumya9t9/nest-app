import { PartialType } from '@nestjs/mapped-types';
import { CreateFeature1Dto } from './create-feature1.dto';

export class UpdateFeature1Dto extends PartialType(CreateFeature1Dto) {
  id: number;
}
