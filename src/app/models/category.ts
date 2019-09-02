export class Category {
  id: number;
  name: string;
  description: string;
  n: number;

  constructor(id: number, name: string, description: string, n: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.n = n;
  }
}
