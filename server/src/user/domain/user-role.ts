export enum UserRoleName {
  ADMIN = 'admin',
}

type UserRoleProperties = {
  id: string;
  name: UserRoleName;
};

export class UserRole {
  constructor(private readonly properties: UserRoleProperties) {}

  getName() {
    return this.properties.name;
  }

  getId() {
    return this.properties.id;
  }
}
