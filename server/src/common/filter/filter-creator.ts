export interface FilterCreator<Params, Result> {
  create(params: Params): Result;
}
