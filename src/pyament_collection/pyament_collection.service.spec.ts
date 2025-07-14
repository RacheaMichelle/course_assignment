import { Test, TestingModule } from '@nestjs/testing';
import { PyamentCollectionService } from './pyament_collection.service';

describe('PyamentCollectionService', () => {
  let service: PyamentCollectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PyamentCollectionService],
    }).compile();

    service = module.get<PyamentCollectionService>(PyamentCollectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
