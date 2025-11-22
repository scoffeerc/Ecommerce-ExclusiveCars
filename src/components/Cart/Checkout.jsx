import { Link } from "react-router-dom";

export const Checkout = () => {
  return (
    <section style={{ padding: "2rem" }}>
      <Link className="btn" to="/">
        Finalizar compra
      </Link>
      <p>Gracias por tu compra 🚗💨</p>
      <p>Procesaremos tu pedido en breve.</p>
    </section>
  );
};