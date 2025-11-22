import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProducts } from "../../services/products"; // ← usamos el service

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((data) => {
        // Convertimos ambos IDs a string para evitar mismatch
        const found = data.find(prod => prod.id.toString() === id);

        if (found) {
          setDetail(found);
        } else {
          throw new Error("Producto no encontrado");
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <main style={{ padding: "20px", minHeight: "100vh", background: "#f5f5f5" }}>
      {loading ? (
        <p>Cargando producto...</p>
      ) : (
        <ItemDetail detail={detail} />
      )}
    </main>
  );
};