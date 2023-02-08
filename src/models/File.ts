export default class File {
  id: string;
  name: string;
  content: string;
  description: string;
  author: string;
  size: number;
  password: string;
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
  constructor(file: File) {
    this.id = file.id;
    this.name = file.name;
    this.content = file.content;
    this.description = file.description;
    this.author = file.author;
    this.size = file.size;
    this.password = file.password;

    const now = new Date();
    this.createdAt = now;
    this.updatedAt = now;
  }
}
