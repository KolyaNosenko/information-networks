import { EventsStorage } from '../interfaces';
import { CreateEventParams, EventEntity } from '../entities';

export class EventsService {
  constructor(private readonly eventsStorage: EventsStorage) {}

  async getEvents() {
    return this.eventsStorage.getEvents();
  }

  async createEvent(data: CreateEventParams) {
    const event = new EventEntity({
      name: data.name,
      description: data.description,
      createAt: new Date(),
    });

    return this.eventsStorage.saveEvent(event);
  }
}
