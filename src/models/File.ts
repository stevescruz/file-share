export class File {
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
    static readonly AttributeId: string = "id";
    static readonly AttributeName: string = "name";
    static readonly AttributeContent: string = "content";
    static readonly AttributeDescription: string = "description";
    static readonly AttributeAuthor: string = "author";
    static readonly AttributeSize: string = "size";
    static readonly AttributePassword: string = "password";
    static readonly AttributeCreatedAt: string = "created_at";
    static readonly AttributeUpdatedAt: string = "updated_at";

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
