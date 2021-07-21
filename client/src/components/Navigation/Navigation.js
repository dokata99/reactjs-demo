import './Navigation.css'
import NavigationLogo from './NavigationLogo'
import NavigationCart from './NavigationCart'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <header>
            <Link className="logo-container nav-link" to="/">
                <NavigationLogo></NavigationLogo>
            </Link>
            <nav>
                <ul className="nav-links">
                    <Link className="nav-link" to="/products">Products</Link>
                    <Link className="nav-link" to="/promotions">Promotions</Link>
                    <Link className="nav-link" to="/contacts">Contacts</Link>
                </ul>
            </nav>
            <NavigationCart></NavigationCart>
        </header>
    )
}

export default Navigation