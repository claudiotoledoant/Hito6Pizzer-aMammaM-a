const CardPizza = ({ pizza, addToCart }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title text-capitalize fw-bold">{pizza.name}</h5>
        <hr />
        <p className="card-text text-center text-muted mb-1">
          🍕 <strong>Ingredientes:</strong>
        </p>
        <p className="card-text text-center small">
          {pizza.ingredients ? pizza.ingredients.join(", ") : ""}
        </p>
      </div>
      <div className="card-footer bg-white border-top-0 pb-3">
        <h4 className="text-center fw-bold mb-3">
          ${pizza.price.toLocaleString("es-CL")}
        </h4>
        <div className="d-flex justify-content-around">
          <button className="btn btn-outline-dark btn-sm">
            Ver Más 👀
          </button>
          <button
            className="btn btn-dark btn-sm"
            onClick={() => addToCart(pizza)}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;