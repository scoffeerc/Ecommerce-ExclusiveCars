import { Link } from "react-router-dom" // ← corregido
import { useCartContext } from "../../context/CartContext/UseCartContext"
import "./Nav.css"

export const Nav = () => {
    const { getTotalItems } = useCartContext();

    return <nav className="nav">
        <ul className="container">
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/category/exclusive"}>Autos Exclusivos</Link>
            </li>
            <li>
                <Link to={"/category/ofertas"}>Autos en Ofertas</Link>
            </li>
            <li>
                <Link to={"/cart"}>Carrito</Link> {/* ← agregar 'to' */}
                {getTotalItems() > 0 && (
                    <span className="in-cart"> {getTotalItems()} </span>
                )}
            </li>
        </ul>
    </nav>
}