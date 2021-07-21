import './NavigationCart.css'
import cart from './cart.svg'

const NavigationCart = () => {
    return (
        <div className="cart">
            <img src={cart} alt="cart"></img>
        </div>
    )
}

export default NavigationCart