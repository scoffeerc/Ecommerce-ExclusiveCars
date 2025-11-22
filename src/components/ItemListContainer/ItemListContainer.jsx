import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "../../services/products";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((data) => {
        let filteredProducts = data;

        // Filtrar por categoría desde la URL
        if (categoryId) {
          filteredProducts = data.filter(
            (product) =>
              product.categories &&
              product.categories.some((cat) =>
                cat.toLowerCase().includes(categoryId.toLowerCase())
              )
          );
        }

        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error:", error);
        setLoading(false);
      });
  }, [categoryId]);

  const getTitle = () => {
    switch (categoryId) {
      case "exclusive":
        return "Autos Exclusivos";
      case "ofertas":
        return "Autos en Ofertas";
      default:
        return "Autos Clásicos";
    }
  };

  if (loading) {
    return (
      <section style={{ padding: "20px", background: "#f5f5f5", minHeight: "100vh" }}>
        <h1>{getTitle()}</h1>
        <p>Cargando productos...</p>
      </section>
    );
  }

  return (
    <section style={{ padding: "20px", background: "#f5f5f5", minHeight: "100vh" }}>
      <h1>{getTitle()}</h1>
      <ItemList list={products} />
    </section>
  );
}