import { EventEntity } from '../entities';

export interface EventsStorage {
  getEvents(): Promise<EventEntity[]>;
}
