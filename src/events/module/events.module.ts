import { Module } from '@nestjs/common';
import { EventsService } from '../services';
import { EventsController } from '../ui';
import { OrmEventsStorage } from '../infrastructure';
import { EventsStorage } from '../interfaces';

@Module({
  controllers: [EventsController],
  providers: [
    OrmEventsStorage,
    {
      provide: EventsService,
      inject: [OrmEventsStorage],
      useFactory: (eventsStorage: EventsStorage) => {
        return new EventsService(eventsStorage);
      },
    },
  ],
})
export class EventsModule {}
