import { EventsStorage } from '../interfaces';

export class EventsService {
  constructor(private readonly eventsStorage: EventsStorage) {}

  async getEvents() {
    return this.eventsStorage.getEvents();
  }
}
