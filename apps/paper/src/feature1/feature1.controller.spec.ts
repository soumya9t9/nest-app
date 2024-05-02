import { Test, TestingModule } from '@nestjs/testing';
import { Feature1Controller } from './feature1.controller';
import { Feature1Service } from './feature1.service';

describe('Feature1Controller', () => {
  let controller: Feature1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Feature1Controller],
      providers: [Feature1Service],
    }).compile();

    controller = module.get<Feature1Controller>(Feature1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
