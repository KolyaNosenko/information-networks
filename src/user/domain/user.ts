import { UserRole } from './user-role';

type UserProperties = {
  id: string;
  accountId: string;
  name: string;
  roles: Array<UserRole>;
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

  getRoles() {
    return this.properties.roles;
  }

  getRoleNames() {
    return this.getRoles().map((role) => role.getName());
  }
}
