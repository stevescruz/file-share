
export interface IRepository {
  create(): Promise<any>;
  deleteById(): Promise<any | undefined>;
  updateById(): Promise<any | undefined>;
  findById(): Promise<any | undefined>;
  findAll(): Promise<any>;
  save(): Promise<any>;
}