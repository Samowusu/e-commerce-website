export type Product = {
  id: string;
  name: string;
  inStock: boolean;
  gallery: [string];
  description: string;
  category: string;
  attributes: AttributeSet[];
  prices: [Price];
  brand: string;
  quantity: number;
};

export type AttributeSet = {
  id: string;
  name: string;
  type: string;
  selectedItem?: Attribute;
  items: [Attribute];
};

export type Price = {
  currency: Currency;
  amount: number;
};

export type Attribute = {
  displayValue: string;
  value: string;
  id: string;
};

export type Currency = {
  label: string;
  symbol: string;
};

export {};
