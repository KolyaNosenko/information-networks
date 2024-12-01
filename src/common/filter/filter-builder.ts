import { FilterCreator } from './filter-creator';

export abstract class FilterBuilder<Params, Result> {
  protected abstract readonly filterCreators: FilterCreator<Params, Result>[];

  constructor(private readonly params: Params) {}

  build(): Result {
    return this.filterCreators.reduce(
      (result, filterCreator) => ({
        ...result,
        ...filterCreator.create(this.params),
      }),
      {} as Result,
    );
  }
}
