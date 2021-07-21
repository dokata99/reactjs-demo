import './NavigationLogo.css'
import logo from './logo.svg'


const NavigationLogo = () => {
    return (
        <div className="logo-container">
            <img src={logo} alt="logo "></img>
            <h4 className="logo">Three Dots</h4>
        </div>
    )
}

export default NavigationLogo