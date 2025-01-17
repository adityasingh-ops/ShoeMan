import { ImageSourcePropType } from 'react-native';
import { Category } from './category';

export type Product = {
  id: number;
  title: string;
  slug: string;
  imagesUrl: ImageSourcePropType[];
  price: number;
  gender:string;
  sizes: number[];
  heroImage: ImageSourcePropType;
  category: Omit<Category, 'products'>;
  maxQuantity: number;
};
