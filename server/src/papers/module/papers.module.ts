import { Module } from '@nestjs/common';
import { PapersService } from '../services';
import { PapersAdminController, PapersController } from '../ui';
import { PrismaPapersStorage } from '../infrastructure';
import { PapersStorage } from '../services/interfaces';
import {
  PapersView,
  AddPaperView,
  AddPaperSuccessView,
  EditPaperSuccessView,
  EditPaperView,
} from '../ui/views';
import {
  AddPaperHandler,
  GetPaperHandler,
  GetPapersHandler,
  UpdatePaperHandler,
} from '../operation';

@Module({
  controllers: [PapersController, PapersAdminController],
  providers: [
    PrismaPapersStorage,
    PapersView,
    EditPaperView,
    EditPaperSuccessView,
    AddPaperView,
    AddPaperSuccessView,
    {
      provide: PapersService,
      inject: [PrismaPapersStorage],
      useFactory: (papersStorage: PapersStorage) => {
        return new PapersService(papersStorage);
      },
    },
    {
      provide: GetPapersHandler,
      inject: [PapersService],
      useFactory: (paperService: PapersService) => {
        return new GetPapersHandler(paperService);
      },
    },
    {
      provide: GetPaperHandler,
      inject: [PapersService],
      useFactory: (paperService: PapersService) => {
        return new GetPaperHandler(paperService);
      },
    },
    {
      provide: AddPaperHandler,
      inject: [PapersService],
      useFactory: (paperService: PapersService) => {
        return new AddPaperHandler(paperService);
      },
    },
    {
      provide: UpdatePaperHandler,
      inject: [PapersService],
      useFactory: (papersService: PapersService) => {
        return new UpdatePaperHandler(papersService);
      },
    },
  ],
  exports: [PapersService],
})
export class PapersModule {}
