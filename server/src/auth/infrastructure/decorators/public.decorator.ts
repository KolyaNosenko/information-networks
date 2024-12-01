import { SetMetadata } from '@nestjs/common';

export const PUBLIC_METADATA_KEY = Symbol('Public');

export const Public = () => SetMetadata(PUBLIC_METADATA_KEY, true);
