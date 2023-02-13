import CreateFileDTO from "../interfaces/create-file-dto.js";

export default class File {
  Id: string;
  name: string;
  content: Blob;
  description: string;
  author: string;
  size: number;
  password: null | string;
  createdAt: Date;
  updatedAt: Date;
  static readonly entityLogicalName: string = "file";
  static readonly attributeId: string = "id";
  static readonly attributeName: string = "name";

  static readonly attributeContent: string = "content";
  static readonly attributeDescription: string = "description";
  static readonly attributeAuthor: string = "author";
  static readonly attributeSize: string = "size";
  static readonly attributePassword: string = "password";
  static readonly attributeCreatedAt: string = "created_at";

  static readonly attributeUpdatedAt: string = "updated_at";
  constructor(file: CreateFileDTO) {
    this.Id = "generated-id";
    this.name = file.name;
    this.content = file.content;
    this.description = file.description;
    this.author = file.author;
    this.size = file.size;
    this.password = file.password ?? null;

    const now = new Date();
    this.createdAt = now;
    this.updatedAt = now;
  }
}
