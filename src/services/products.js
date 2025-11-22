const BASE_URL = "https://6921ddd5512fb4140be19b2d.mockapi.io/cars";

// ⭐ Crear producto
export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("No se pudo crear el producto");
  }

  return await res.json();
};

// ⭐ Obtener TODOS los productos
export const getProducts = async () => {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error("No se pudieron obtener los productos");
  }

  return await res.json();
};

// ⭐ Obtener SOLO 1 producto por ID (esto nos interesa para el detail)
export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);

  if (!res.ok) {
    throw new Error("Producto no encontrado");
  }

  return await res.json();
};
