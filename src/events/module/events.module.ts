import { Module } from '@nestjs/common';
import { EventsService } from '../services';
import { EventsController } from '../ui';
import { PrismaEventsStorage } from '../infrastructure';
import { EventsStorage } from '../interfaces';

@Module({
  controllers: [EventsController],
  providers: [
    PrismaEventsStorage,
    {
      provide: EventsService,
      inject: [PrismaEventsStorage],
      useFactory: (eventsStorage: EventsStorage) => {
        return new EventsService(eventsStorage);
      },
    },
  ],
})
export class EventsModule {}
