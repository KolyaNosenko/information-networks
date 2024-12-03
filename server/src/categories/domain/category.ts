type CategoryProperties = {
  id: string;
  name: string;
  updatedAt: Date;
  createdAt: Date;
};

export class Category {
  constructor(private readonly properties: CategoryProperties) {}

  getId() {
    return this.properties.id;
  }

  getName() {
    return this.properties.name;
  }

  setName(name: string) {
    this.properties.name = name;
    return this;
  }

  getUpdatedAt() {
    return this.properties.updatedAt;
  }

  setUpdatedAt(date: Date) {
    this.properties.updatedAt = date;
    return this;
  }

  getCreatedAt() {
    return this.properties.createdAt;
  }
}
