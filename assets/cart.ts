import { cartProduct } from './types/cart';


export const CARTPRODUCTS: cartProduct[] = [
  {
    id: 1,
    title: 'Nike Air Max 2024',
    slug: 'nike-air-max-2024',
    heroImage: require('../assets/images/shoes1.png'),

    price: 199.99,

    inStock: true,
    quantity: 1,
    sizes: [7, 8, 9, 10, 11],
    maxQuantity: 5,
  },
  {
    id: 2,
    title: 'Adidas Ultraboost',
    slug: 'adidas-ultraboost',
    heroImage: require('../assets/images/shoes2.png'),
    inStock: true,
    quantity: 1,
    price: 179.99,
    sizes: [8, 9, 10, 11, 12],
    maxQuantity: 7,
  },
  {
    id: 3,
    title: 'Puma RS-X',
    slug: 'puma-rs-x',
    heroImage: require('../assets/images/shoes3.png'),
    inStock: true,
    quantity: 1,
    price: 159.99,
    sizes: [6, 7, 8, 9, 10],
    maxQuantity: 10,
  },
  {
    id: 4,
    title: 'Reebok Nano X2',
    slug: 'reebok-nano-x2',
    heroImage: require('../assets/images/shoes2.png'),
    price: 129.99,
    inStock: true,
    quantity: 1,
    sizes: [7, 8, 9, 10, 11],
    maxQuantity: 12,
  },
];
