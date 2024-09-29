type EventProperties = {
  title: string;
  description: string;
  createAt: Date;
};

export class EventEntity {
  constructor(private readonly properties: EventProperties) {}

  getTitle() {
    return this.properties.title;
  }

  getDescription() {
    return this.properties.description;
  }

  getCreatedAt() {
    return this.properties.createAt;
  }
}
