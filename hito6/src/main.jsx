import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CartProvider from "./context/CartContext.jsx";
import PizzaProvider from "./context/PizzaContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PizzaProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </PizzaProvider>
  </React.StrictMode>
);