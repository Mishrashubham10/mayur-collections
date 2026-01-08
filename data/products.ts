import { Product } from "@/contexts/ShopContext";

export const products: Product[] = [
  // Jeans Collection
  {
    id: 'jeans-1',
    name: 'Classic Slim Fit Denim',
    price: 2499,
    image:
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'jeans',
    color: 'Dark Blue',
  },
  {
    id: 'jeans-2',
    name: 'Vintage Washed Jeans',
    price: 2799,
    image:
      'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'jeans',
    color: 'Light Blue',
  },
  {
    id: 'jeans-3',
    name: 'Straight Cut Black Denim',
    price: 2299,
    image:
      'https://images.pexels.com/photos/1895943/pexels-photo-1895943.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'jeans',
    color: 'Black',
  },
  {
    id: 'jeans-4',
    name: 'Relaxed Fit Cargo Jeans',
    price: 3199,
    image:
      'https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'jeans',
    color: 'Khaki',
  },
  {
    id: 'jeans-5',
    name: 'Distressed Skinny Jeans',
    price: 2699,
    image:
      'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'jeans',
    color: 'Medium Blue',
  },
  {
    id: 'jeans-6',
    name: 'Premium Raw Denim',
    price: 3499,
    image:
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'jeans',
    color: 'Indigo',
  },
  // T-Shirts Collection
  {
    id: 'tshirt-1',
    name: 'Essential Cotton Crew',
    price: 899,
    image:
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 't-shirts',
    color: 'White',
  },
  {
    id: 'tshirt-2',
    name: 'Premium Black Tee',
    price: 999,
    image:
      'https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 't-shirts',
    color: 'Black',
  },
  {
    id: 'tshirt-3',
    name: 'Henley Neck Classic',
    price: 1299,
    image:
      'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 't-shirts',
    color: 'Navy',
  },
  {
    id: 'tshirt-4',
    name: 'Striped Polo Tee',
    price: 1499,
    image:
      'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 't-shirts',
    color: 'Blue Stripe',
  },
  {
    id: 'tshirt-5',
    name: 'Oversized Comfort Fit',
    price: 1199,
    image:
      'https://images.pexels.com/photos/6764007/pexels-photo-6764007.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 't-shirts',
    color: 'Olive',
  },
  {
    id: 'tshirt-6',
    name: 'V-Neck Premium Cotton',
    price: 1099,
    image:
      'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 't-shirts',
    color: 'Grey',
  },
];

export const getProductsByCategory = (
  category: 'jeans' | 't-shirts'
): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};