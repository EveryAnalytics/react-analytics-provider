export type ProductType = {
  id: string;
  categoryId: string;
  name: {en: string; ko: string};
  imageUrl: string;
  price: number;
  brand: string;
};

export type AnalyticsViewItemType = {
  id: string;
  name: string;
  category?: string;
  variant?: string;
  price?: number;
  brand?: string;
  quantity?: number;
  coupon?: string;
  list_position?: number;
  list_name?: string;
};
