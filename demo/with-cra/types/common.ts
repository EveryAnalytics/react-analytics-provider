export interface ProductItem {
  id: string;
  categoryId: string;
  name: {
    en: string;
    ko: string;
  };
  imageUrl: string;
  price: number;
  brand: string;
}
