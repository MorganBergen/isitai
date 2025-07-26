export interface Plan {
  name: string;
  priceId: string;
  amount: number; // amount in cents per month
  imageCount: string;
  isFeatured?: boolean;
}

/**
 *    <id>
 *    <object>
 *    <amount>
 */

export const plans: Plan[] = [
  { name: 'Basic', priceId: 'price_1Rp0u7D3wDlemsCxJZRu2YM4', amount: 100, imageCount: '10 images' },
  { name: 'Personal', priceId: 'price_1Rp0xoD3wDlemsCxE5ve4XGx', amount: 1000, imageCount: '100 images', isFeatured: true },
  { name: 'Professional', priceId: 'price_1Rp0y7D3wDlemsCx5qsrjyhU', amount: 5000, imageCount: '1,000 images' },
];
