import { Paper } from '../../papers/entities';

type LibraryEntryProperties = {
  id: string;
  userId: string;
  paper: Paper;
  progress: number;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export class LibraryEntry {
  constructor(private readonly properties: LibraryEntryProperties) {}

  getId() {
    return this.properties.id;
  }

  getUserId() {
    return this.properties.userId;
  }

  getPaper() {
    return this.properties.paper;
  }

  getProgress() {
    return this.properties.progress;
  }

  setProgress(progress: number) {
    this.properties.progress = progress;
    return this;
  }

  getIsRead() {
    return this.properties.isRead;
  }

  setIsRead(isRead: boolean) {
    this.properties.isRead = isRead;
    return this;
  }

  getCreateAt() {
    return this.properties.createdAt;
  }

  getUpdateAt() {
    return this.properties.updatedAt;
  }

  setUpdateAt(date: Date) {
    this.properties.updatedAt = date;
    return this;
  }
}
