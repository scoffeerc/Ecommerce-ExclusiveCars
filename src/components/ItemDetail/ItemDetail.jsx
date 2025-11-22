// ...existing code...
import { Link } from "react-router-dom"
import "./ItemDetail.css"
import { useCartContext } from '../../context/CartContext/UseCartContext'


export const ItemDetail = ({ detail }) => {
    const { addToCart } = useCartContext(); // ← Agregar esto

    
   const addItem = () => {
    if (!detail?.id) {
        console.error("⚠️ El producto no tiene ID, no se puede agregar al carrito.");
        return;
    }
    addToCart(detail);
}


    return (
        <div className="item-detail">
            <Link to="/" className="item-detail__back">
                ← Volver a la lista
            </Link>
            
            <div className="item-detail__container">
                <img 
                    src={detail.image} 
                    alt={detail.name} 
                    className="item-detail__image"
                />
                
                <div className="item-detail__info">
                    <h1 className="item-detail__title">{detail.name}</h1>
                    <p className="item-detail__price">
                        ${detail.price.toLocaleString()}
                    </p>
                    
                    <div className="item-detail__specs">
                        <p className="spec-item"><strong>Fabricante:</strong> {detail.manufacturer}</p>
                        <p className="spec-item"><strong>Año:</strong> {detail.year}</p>
                        <p className="spec-item"><strong>Motor:</strong> {detail.engine}</p>
                        <p className="spec-item"><strong>Potencia:</strong> {detail.horsepower} HP</p>
                        <p className="spec-item"><strong>Velocidad máxima:</strong> {detail.topSpeed_kmh} km/h</p>
                        <p className="spec-item"><strong>Tracción:</strong> {detail.drivetrain}</p>
                        <p className="spec-item"><strong>Color:</strong> {detail.color}</p>
                        <p className="spec-item"><strong>Disponible:</strong> {detail.available ? '✅ Sí' : '❌ No'}</p>
                    </div>
                    
                    <p className="item-detail__description">{detail.description}</p>
                    
                    <div className="item-detail__categories">
                        <h3>Categorías:</h3>
                        <div className="item-detail__category-list">
                            {detail.categories?.map((cat, index) => (
                                <span key={index} className="item-detail__category-badge">
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="item-detail__features">
                        <h3>Características:</h3>
                        <ul className="features-list">
                            {detail.features?.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                    
                    {detail.available && (
                        <button 
                            onClick={addItem} 
                            className="btn btn--add-to-cart"
                        >
                            Agregar al Carrito
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}