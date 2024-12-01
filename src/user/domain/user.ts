type UserProperties = {
  id: string;
  accountId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export class User {
  constructor(private readonly properties: UserProperties) {}

  getId() {
    return this.properties.id;
  }

  getAccountId() {
    return this.properties.accountId;
  }

  getName() {
    return this.properties.name;
  }

  getCreateAt() {
    return this.properties.createdAt;
  }

  getUpdateAt() {
    return this.properties.updatedAt;
  }
}
