type AccountProperties = {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
  updateAt: Date;
};

export class Account {
  constructor(private readonly properties: AccountProperties) {}

  getId() {
    return this.properties.id;
  }

  getEmail() {
    return this.properties.email;
  }

  getPassword() {
    return this.properties.password;
  }

  getCreateAt() {
    return this.properties.createdAt;
  }

  getUpdateAt() {
    return this.properties.updateAt;
  }
}
