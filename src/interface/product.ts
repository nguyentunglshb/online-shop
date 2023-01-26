export interface IProduct {
  _id: string;
  name: string;
  content: string;
  createdAt: string;
  currency: "VND" | "USD";
  currentPrice: number;
  originPrice: number;

  description: string;
  headImageUrl: string;
  imageUrls: string[];
  status: "active" | "inactive";
  tags: string[];
}
