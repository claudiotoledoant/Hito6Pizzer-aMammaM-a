import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);

  return (
    <div className="container my-5" style={{ maxWidth: "800px" }}>
      <h3 className="mb-4">Detalles del pedido:</h3>
      
      {cart.length === 0 ? (
        <p className="text-center my-5">El carrito está vacío 🍕</p>
      ) : (
        <>
          <div className="list-group mb-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    className="rounded"
                  />
                  <h6 className="mb-0 text-capitalize">{item.name}</h6>
                </div>
                
                <div className="d-flex align-items-center gap-3">
                  <span className="fw-bold">
                    ${(item.price * item.count).toLocaleString("es-CL")}
                  </span>
                  
                  {/* Botón Restar */}
                  <button
                    className="btn btn-outline-danger btn-sm px-3"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  
                  <span className="fw-bold">{item.count}</span>
                  
                  {/* Botón Sumar */}
                  <button
                    className="btn btn-outline-primary btn-sm px-3"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <h4>Total: ${total.toLocaleString("es-CL")}</h4>
            <button className="btn btn-dark">Pagar 🛒</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;