type PaperProperties = {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
};

export class Paper {
  constructor(private readonly properties: PaperProperties) {}

  getId() {
    return this.properties.id;
  }

  getName() {
    return this.properties.name;
  }

  getDescription() {
    return this.properties.description;
  }

  getAuthor() {
    return this.properties.author;
  }

  getCoverUrl() {
    return this.properties.coverUrl;
  }

  getCreatedAt() {
    return this.properties.createdAt;
  }

  getUpdatedAt() {
    return this.properties.updatedAt;
  }
}
