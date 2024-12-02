import { Module } from '@nestjs/common';
import { PapersService } from '../services';
import { PapersController } from '../ui';
import { PrismaPapersStorage } from '../infrastructure';
import { PapersStorage } from '../services/interfaces';
import {
  EventsView,
  CreateEventView,
  CreateEventSuccessView,
} from '../ui/views';

@Module({
  controllers: [PapersController],
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
  ],
})
export class PapersModule {}
