import { type Product } from "~/types/product"
export const useCart = () => {
  const cart = useState<Product[]>('cart', () => []);

  const addToCart = (product: Product) => {
    cart.value.push(product);
  }

  const removeFromCart = (id: String) => {
    cart.value = cart.value.filter(p => p.id !== id)
  }

  const clearAllProductsFromCart = () => {
    cart.value = [];
  }

  return { cart, addToCart, removeFromCart, clearAllProductsFromCart }
}
