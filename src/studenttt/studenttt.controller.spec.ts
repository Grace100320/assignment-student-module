import { Test, TestingModule } from '@nestjs/testing';
import { StudentttController } from './studenttt.controller';

describe('StudentttController', () => {
  let controller: StudentttController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentttController],
    }).compile();

    controller = module.get<StudentttController>(StudentttController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
