import { EventEntity } from '../entities';
import { EventsStorage } from '../interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrmEventsStorage implements EventsStorage {
  async getEvents(): Promise<EventEntity[]> {
    console.log('Call storage!!');
    return [];
  }
}
