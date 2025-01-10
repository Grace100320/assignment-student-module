import { Test, TestingModule } from '@nestjs/testing';
import { StudentttService } from './studenttt.service';

describe('StudentttService', () => {
  let service: StudentttService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentttService],
    }).compile();

    service = module.get<StudentttService>(StudentttService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
