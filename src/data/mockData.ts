export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category?: string;
  rating?: number;
}

export const products: Product[] = [
  { id: '1', name: 'Curated Essential Alpha', description: 'Premium handcrafted design item.', price: 49.99, category: 'Featured', rating: 4.8 },
  { id: '2', name: 'Curated Essential Beta', description: 'Durable and minimalist modern form.', price: 79.99, category: 'Featured', rating: 4.9 },
  { id: '3', name: 'Curated Essential Gamma', description: 'Precision engineered everyday companion.', price: 129.99, category: 'Accessories', rating: 4.7 }
];

export const categories: string[] = ['All', 'Featured', 'Accessories', 'New'];
export const mockData = { products, categories, items: products };
export default mockData;
