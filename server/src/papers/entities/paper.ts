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

  setName(name: string) {
    this.properties.name = name;
    return this;
  }

  getDescription() {
    return this.properties.description;
  }

  setDescription(description: string) {
    this.properties.description = description;
    return this;
  }

  getAuthor() {
    return this.properties.author;
  }

  setAuthor(author: string) {
    this.properties.author = author;
    return this;
  }

  getCoverUrl() {
    return this.properties.coverUrl;
  }

  setCoverUrl(coverUrl: string) {
    this.properties.coverUrl = coverUrl;
    return this;
  }

  getCreatedAt() {
    return this.properties.createdAt;
  }

  getUpdatedAt() {
    return this.properties.updatedAt;
  }

  setUpdatedAt(date: Date) {
    this.properties.updatedAt = date;
    return this;
  }
}
