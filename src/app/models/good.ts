export class Good {
  id: number;
  name: string;
  description: string;
  price: number;
  category: number;

  constructor(id: number, name: string, description: string, price: number, category: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
  }
}
