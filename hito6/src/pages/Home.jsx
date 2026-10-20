import { useContext } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { CartContext } from "../context/CartContext";
import { PizzaContext } from "../context/PizzaContext";

const Home = () => {
  const { pizzas } = useContext(PizzaContext);
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-12 col-md-4">
              <CardPizza pizza={pizza} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;