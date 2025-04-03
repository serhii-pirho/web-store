export class Item {
  constructor(
    public id: number,
    public type: string,
    public details: {
      title: string;
      price: number;
      available: boolean;
      imageUrl?: string;
    }
  ) {}
  get title(): string {
    return this.details.title;
  }
  get price(): number | undefined {
    return this.details.price;
  }
  get imageUrl(): string | undefined {
    return this.details.imageUrl;
  }
}
