export interface ToRequest<RequestType, DtoType> {
  toRequest(dto: DtoType): RequestType;
}
