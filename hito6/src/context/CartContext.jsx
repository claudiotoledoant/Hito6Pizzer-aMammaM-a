import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar una pizza al carrito desde Home o Pizza detail
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prevCart, { ...product, count: 1 }];
    });
  };

  // Incrementar la cantidad de una pizza en el carrito
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

// Decrementar la cantidad o eliminar si llega a 0
const decreaseQuantity = (id) => {
  setCart((prevCart) =>
    prevCart
      .map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
      .filter((item) => item.count > 0)
  );
};
  // Calcular el total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQuantity, decreaseQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;