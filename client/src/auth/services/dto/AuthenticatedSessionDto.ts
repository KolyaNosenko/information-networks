export type AuthenticatedSessionDto = {
  access_expires_at: number;
  refresh_expires_at: number;
  user: { id: string; nebula_id: number };
};
