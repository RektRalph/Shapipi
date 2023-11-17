import { useLocalStorage } from "usehooks-ts";

export const useCart = () => {
  const [cart, setCart] = useLocalStorage("cart", {});

  const addToCart = (product) => {
    setCart((prevCart) => {
      if (!prevCart[product.id]) {
        return { ...prevCart, [product.id]: { product, count: 1 } };
      }

      return {
        ...prevCart,
        [product.id]: { product, count: prevCart[product.id].count + 1 },
      };
    });
  };

  const totalItems = Object.entries(cart).reduce((acc, entry) => {
    acc += entry[1].count;
    return acc;
  }, 0);

  const itemCount = (productId) => {
    return cart[productId]?.count || 0;
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const newCart = prevCart;
      delete newCart[productId];
      return newCart;
    });
  };

  const removeItem = (productId) => {
    setCart((prevCart) => {
      const newCart = prevCart;
      newCart[productId].count -= 1;
      if (newCart[productId].count === 0) delete newCart[productId];
      return newCart;
    });
  };

  return { cart, addToCart, totalItems, itemCount, removeFromCart, removeItem };
};
