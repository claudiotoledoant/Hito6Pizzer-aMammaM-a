import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // ID fijo de ejemplo (p001) para mostrar la vista individual
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((err) => console.error(err));
  }, []);

  if (!pizza) return <div className="text-center my-5">Cargando...</div>;

  return (
    <div className="container my-5">
      <div className="card mb-3 mx-auto" style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={pizza.img}
              className="img-fluid rounded-start h-100"
              alt={pizza.name}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title text-capitalize">{pizza.name}</h3>
              <p className="card-text">{pizza.desc}</p>
              <p className="card-text">
                <small className="text-muted">
                  🍕 Ingredientes: {pizza.ingredients.join(", ")}
                </small>
              </p>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <h4 className="mb-0">
                  Precio: ${pizza.price.toLocaleString("es-CL")}
                </h4>
                <button
                  className="btn btn-dark"
                  onClick={() => addToCart(pizza)}
                >
                  Añadir 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;