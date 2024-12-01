type EventProperties = {
  name: string;
  description: string;
  createAt: Date;
};

export class EventEntity {
  constructor(private readonly properties: EventProperties) {}

  getName() {
    return this.properties.name;
  }

  getDescription() {
    return this.properties.description;
  }

  getCreatedAt() {
    return this.properties.createAt;
  }
}
