import { Test, TestingModule } from '@nestjs/testing';
import { LectureModuleService } from './lecture-module.service';

describe('LectureModuleService', () => {
  let service: LectureModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LectureModuleService],
    }).compile();

    service = module.get<LectureModuleService>(LectureModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
