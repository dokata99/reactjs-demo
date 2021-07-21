import './Home.css'
import matebook from './matebook.png'

const Home = () => {
    return (
        <section className="presentation">
            <div className="introduction">
                <div className="intro-text">
                    <h1>Laptop from the future</h1>
                    <p>
                        The new 14 int bezeless display oferring a 4k
                        display with touch screen.
                    </p>
                </div>
                <div className="cta">
                    <button className="cta-select">14 Inch</button>
                    <button className="cta-add">Add To Cart</button>
                </div>
            </div>
            <div className="cover">
                <img src={matebook} alt="matebook"></img>
            </div>
        </section>

    )
}

export default Home