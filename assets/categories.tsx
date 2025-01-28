import { Category } from './types/category';
import { PRODUCTS } from './products';

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Nike',
    slug: 'nike',
    imageUrl:require('../assets/images/categories/nike.png'),
    products: PRODUCTS.filter(product => product.category.slug === 'laptops'),
  },
  {
    id: 2,
    name: 'Adidas',
    slug: 'adidas',
    imageUrl:require('../assets/images/categories/adidas.png'),
    products: PRODUCTS.filter(product => product.category.slug === 'phones'),
  },
  {
    id: 3,
    name: 'Puma',
    slug: 'puma',
    imageUrl:require('../assets/images/categories/puma.png'),
    products: PRODUCTS.filter(product => product.category.slug === 'gaming'),
  },
  {
    id: 4,
    name: 'Under Armour',
    slug: 'under-armour',
    imageUrl:require('../assets/images/categories/UA.png'),
    products: PRODUCTS.filter(
      product => product.category.slug === 'accessories'
    ),
  },
];
