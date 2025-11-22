import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/UseCartContext";
import "./Cart.css";

export const Cart = () => {
  const { cart, clearCart, removeFromCart, getTotalPrice } = useCartContext();

  if (!cart.length) {
    return (
      <section className="cart-container">
        <h2>Carrito de compras</h2>
        <p>Tu carrito está vacío</p>
        <Link className="btn" to="/">Volver al inicio</Link>
      </section>
    );
  }

  return (
    <section className="cart-container">
      <h2>Carrito de compras</h2>

      <ul className="cart-list">
        {cart.map(prod => (
          <li key={prod.id} className="cart-item">
            <img src={prod.image} alt={prod.name} className="cart-img" />

            <div className="cart-info">
              <h4>{prod.name}</h4>
              <p>Precio: ${prod.price.toLocaleString()}</p>
              <p>Cantidad: {prod.quantity}</p>
              <p>Subtotal: ${(prod.price * prod.quantity).toLocaleString()}</p>
            </div>

            <button className="btn btn-danger" onClick={() => removeFromCart(prod.id)}>
              ❌ Eliminar
            </button>
          </li>
        ))}
      </ul>

      <div className="cart-total">
        <p>Total a pagar: <strong>${getTotalPrice().toLocaleString()}</strong></p>
      </div>

      <div className="cart-actions">
        <button className="btn btn-warning" onClick={clearCart}>Vaciar carrito</button>
        <Link className="btn" to="/checkout">Finalizar compra</Link>
      </div>
    </section>
  );
};