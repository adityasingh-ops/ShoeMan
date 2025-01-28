import { ImageSourcePropType } from 'react-native';
import { Product } from './product';

export type Category = {
  id: number;
  name: string;
  imageUrl: ImageSourcePropType;
  slug: string;
  products: Product[];
};
