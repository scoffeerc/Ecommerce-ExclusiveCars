import { Link } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemList = ({ list }) => {
    console.log("🎯 ItemList recibió:", list);
    
    if (!list || list.length === 0) {
        return <p style={{ padding: '20px', textAlign: 'center' }}>No hay productos disponibles</p>;
    }

    return (
        <div style={{ display: 'grid', gap: '20px' }}>
            {list.map((prod) => (
                <div key={prod.id}>
                    <Item {...prod} />
                </div>
            ))}
        </div>
    );
};