import { UserRoleDto } from './user-role.dto';

export type UserDto = {
  id: string;
  account_id: string;
  name: string;
  roles: Array<UserRoleDto>;
  created_at: number;
  updated_at: number;
};
