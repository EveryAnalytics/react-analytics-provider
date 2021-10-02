export type Impression = {
  id: string;
  name: string;
  list_name?: string;
  brand?: string;
  category?: string;
  variant?: string;
  list_position?: number;
  price?: number;
};

export type Product = {
  id: string;
  name: string;
  list_name?: string;
  brand?: string;
  category?: string;
  variant?: string;
  price?: number;
  quantity?: number;
  coupon?: string;
  list_position?: number;
};

export type Action = {
  items: Array<Product>;
};

export type Transaction = {
  transaction_id: string;
  affiliation?: string;
  value?: number;
  tax?: number;
  shipping?: number;
  items?: Array<Product>;
};
