import { Product } from './products';
export interface CartProudct {
  count: number;
  _id: string;
  product: Product;
  price: number;
}
