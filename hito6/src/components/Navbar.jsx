import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <span className="navbar-brand me-3">Pizzería Mamma Mía!</span>
          
          <button className="btn btn-outline-light btn-sm">
            🍕 Home
          </button>

          {token ? (
            <>
              <button className="btn btn-outline-light btn-sm">
                🔓 Profile
              </button>
              <button className="btn btn-outline-light btn-sm">
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light btn-sm">
                🔐 Login
              </button>
              <button className="btn btn-outline-light btn-sm">
                🔐 Register
              </button>
            </>
          )}
        </div>

        <div>
          <button className="btn btn-outline-info btn-sm fw-bold">
            🛒 Total: ${total.toLocaleString("es-CL")}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;