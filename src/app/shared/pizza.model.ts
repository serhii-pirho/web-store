export class Pizza {
  constructor(
    public id: number,
    public details: {
      title: string;
      price: number;
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
