import { Module } from '@nestjs/common';
import { EventsService } from '../services';
import { EventsController } from '../ui';
import { PrismaEventsStorage } from '../infrastructure';
import { EventsStorage } from '../interfaces';
import {
  EventsView,
  CreateEventView,
  CreateEventSuccessView,
} from '../ui/views';

@Module({
  controllers: [EventsController],
  providers: [
    PrismaEventsStorage,
    EventsView,
    CreateEventView,
    CreateEventSuccessView,
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
