export interface ToEntity<EntityType, DBType> {
  toEntity(db: DBType): EntityType;
}
