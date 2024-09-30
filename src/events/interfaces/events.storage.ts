import { EventEntity } from '../entities';

export interface EventsStorage {
  getEvents(): Promise<EventEntity[]>;
  saveEvent(event: EventEntity): Promise<void>;
}
