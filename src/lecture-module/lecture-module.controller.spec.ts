import { Test, TestingModule } from '@nestjs/testing';
import { LectureModuleController } from './lecture-module.controller';
import { LectureModuleService } from './lecture-module.service';

describe('LectureModuleController', () => {
  let controller: LectureModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LectureModuleController],
      providers: [LectureModuleService],
    }).compile();

    controller = module.get<LectureModuleController>(LectureModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
