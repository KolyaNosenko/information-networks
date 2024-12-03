import { Module } from '@nestjs/common';
import { PapersService } from '../services';
import { PapersAdminController, PapersController } from '../ui';
import { PrismaPapersStorage } from '../infrastructure';
import { PapersStorage } from '../services/interfaces';
import {
  EventsView,
  CreateEventView,
  CreateEventSuccessView,
} from '../ui/views';
import {
  AddPaperHandler,
  GetPapersHandler,
  UpdatePaperHandler,
} from '../operation';

@Module({
  controllers: [PapersController, PapersAdminController],
  providers: [
    PrismaPapersStorage,
    EventsView,
    CreateEventView,
    CreateEventSuccessView,
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
