import { Test, TestingModule } from '@nestjs/testing';
import { PyamentCollectionController } from './pyament_collection.controller';
import { PyamentCollectionService } from './pyament_collection.service';

describe('PyamentCollectionController', () => {
  let controller: PyamentCollectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PyamentCollectionController],
      providers: [PyamentCollectionService],
    }).compile();

    controller = module.get<PyamentCollectionController>(PyamentCollectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
