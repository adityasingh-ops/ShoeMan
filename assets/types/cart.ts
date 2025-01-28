import { ImageSourcePropType } from 'react-native';

export type cartProduct = {
  id: number;
  title: string;
  slug: string;
  price: number;
  quantity: number;
  sizes: number[];
  heroImage: ImageSourcePropType;
  inStock:boolean;
   maxQuantity: number;
};
