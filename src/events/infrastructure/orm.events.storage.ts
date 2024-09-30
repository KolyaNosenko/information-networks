import { EventEntity } from '../entities';
import { EventsStorage } from '../interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrmEventsStorage implements EventsStorage {
  async getEvents(): Promise<EventEntity[]> {
    return [
      new EventEntity({
        title: 'Title1',
        description: 'Description 1',
        createAt: new Date(),
      }),
      new EventEntity({
        title: 'Title2',
        description: 'Description 2',
        createAt: new Date(),
      }),
      new EventEntity({
        title: 'Title3',
        description: 'Description 3',
        createAt: new Date(),
      }),
      new EventEntity({
        title: 'Title4',
        description: 'Description 4',
        createAt: new Date(),
      }),
    ];
  }
}
