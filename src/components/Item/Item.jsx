import { Link } from "react-router-dom"

export const Item = ({ 
    id, 
    name, 
    price, 
    description, 
    image, 
    manufacturer, 
    year, 
    engine, 
    horsepower, 
    topSpeed_kmh,
    available,
    children 
}) => {
    return (
        <Link to={`/detail/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <article style={{ 
                border: '2px solid #ddd', 
                padding: '20px', 
                borderRadius: '10px',
                background: available ? 'white' : '#f9f9f9',
                margin: '10px 0',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                opacity: available ? 1 : 0.7
            }}>
                <h2 style={{ color: '#333', marginBottom: '10px' }}>{name}</h2>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <img src={image} alt={name} width="300" height="200" style={{ objectFit: 'cover', borderRadius: '5px' }} />
                    <div>
                        <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#e44d26', margin: '10px 0' }}>
                            ${price.toLocaleString()} {available ? '' : '❌ NO DISPONIBLE'}
                        </p>
                        <p><strong>Fabricante:</strong> {manufacturer}</p>
                        <p><strong>Año:</strong> {year}</p>
                        <p><strong>Motor:</strong> {engine}</p>
                        <p><strong>Potencia:</strong> {horsepower} HP</p>
                        <p><strong>Velocidad máxima:</strong> {topSpeed_kmh} km/h</p>
                        <p style={{ color: '#666', marginTop: '10px' }}>{description}</p>
                        {children}
                    </div>
                </div>
            </article>
        </Link>
    );
}