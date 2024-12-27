export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  platformFee: number;
  shippingCost: number;
  tax: number;
  totalCost: number;
  status: string;
}
