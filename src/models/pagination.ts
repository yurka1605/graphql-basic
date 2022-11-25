export interface IPagination {
  limit?: number;
  offset?: number;
}

export interface IEntityPagination<T> extends IPagination {
  items: Array<T>,
  total: number,
}