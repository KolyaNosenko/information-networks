import { ToEntity } from '../../../common/database/db-mappers';
import { Event as PrismaEvent } from '@prisma/client';
import { EventEntity } from '../../entities';

export class EventDbMapper implements ToEntity<EventEntity, PrismaEvent> {
  toEntity(db: PrismaEvent): EventEntity {
    return new EventEntity({
      name: db.name,
      description: db.description,
      createAt: db.createdAt,
    });
  }
}
