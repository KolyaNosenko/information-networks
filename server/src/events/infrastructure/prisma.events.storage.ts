import { EventEntity } from '../entities';
import { EventsStorage } from '../interfaces';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../common/database/services';
import { EventDbMapper } from './dto-mappers';

@Injectable()
export class PrismaEventsStorage implements EventsStorage {
  constructor(private readonly db: DatabaseService) {}

  async getEvents(): Promise<EventEntity[]> {
    const dbMapper = new EventDbMapper();

    const events = await this.db.event.findMany();

    return events.map(dbMapper.toEntity);
  }

  async saveEvent(event: EventEntity): Promise<void> {
    await this.db.event.create({
      data: {
        name: event.getName(),
        description: event.getDescription(),
        createdAt: event.getCreatedAt(),
      },
    });
  }
}
