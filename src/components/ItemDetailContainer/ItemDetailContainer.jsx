import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        fetch("/data/products.json")
        .then((response) => {
            if(!response.ok){
                throw new Error("Problema en buscar productos")
            } 
            return response.json();
        })
        .then((data) => {
           const found = data.find(prod => prod.id === id);
           if(found){
            setDetail(found)
           } else {
            throw new Error("Producto no encontrado")
           }
        })
        .catch((error) => { console.log(error) }); 
    }, [id])

    return (
        <main>
            {Object.keys(detail).length ? (
                <ItemDetail detail={detail}/>
            ) : (
                <p>Cargando producto...</p>
            )}
        </main>
    )
}