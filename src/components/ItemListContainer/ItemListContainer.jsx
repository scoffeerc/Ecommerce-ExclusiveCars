import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        console.log("🎯 Cargando productos del JSON...");
        
        fetch("/data/products.json")
        .then((response) => {
            if(!response.ok){
                throw new Error("Problema en buscar productos");
            } 
            return response.json();
        })
        .then((data) => {
            let filteredProducts = data;
            
            // Filtrar por categoría si existe
            if (categoryId) {
                filteredProducts = data.filter(product => 
                    product.categories && 
                    product.categories.some(cat => 
                        cat.toLowerCase().includes(categoryId.toLowerCase())
                    ))}
            setProducts(filteredProducts);
            setLoading(false);
        })
        .catch((error) => { 
            console.log("❌ Error:", error);
            setLoading(false);
        }); 
    }, [categoryId]);
    
    const getTitle = () => {
        switch(categoryId) {
            case 'exclusive': return 'Autos Exclusivos';
            case 'ofertas': return 'Autos en Ofertas';
            default: return 'Autos Clásicos';
        }
    };
    
    if (loading) {
        return (
            <section style={{ padding: '20px', background: '#f5f5f5', minHeight: '100vh' }}>
                <h1>Autos Clásicos</h1>
                <p>Cargando productos...</p>
            </section>
        );
    }

    return (
        <section style={{ padding: '20px', background: '#f5f5f5', minHeight: '100vh' }}>
            <h1>Autos Clásicos</h1>
            <ItemList list={products}/>
        </section>
    );
};

