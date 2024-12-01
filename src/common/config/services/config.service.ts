import { DAY, HOUR } from '../../utils/date';

export class ConfigService {
  port = process.env.PORT;

  auth = {
    accessTokenLifetime: 2 * HOUR,
    refreshTokenLifetime: 30 * DAY,
  };
}
