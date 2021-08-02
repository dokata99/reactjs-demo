import './ProductList.css'
import { Link } from 'react-router-dom'
//import ProductCard from './../ProductCard'

const ProductList = ({
    products
}) => {

    return (
        <>
            {products.map(laptop =>
                <li className="list-element" key={laptop._id}>
                    <article className="article-container">
                        <Link className="ancher-tag-container" to={`laptop/${laptop._id}`}>
                            <img className="img-container-products-list" src={laptop.imgUrl} alt={laptop.brand+' '+laptop.model}/>
                            <h2 className="h2-title">{laptop.brand} {laptop.model}</h2>
                            <ul className="small-ul-container">
                                <li>
                                    {laptop.processorName}
                                </li>
                                <li>
                                    {laptop.videoCard}
                                </li>
                                <li>
                                    {laptop.displaySize} Inches
                                </li>
                                <li>
                                    {laptop.ramSize} {laptop.ramType}
                                </li>
                            </ul>
                            <h3 className="small-ul-price">{laptop.price} BGN</h3>
                        </Link>
                    </article>
                </li>
            )}
        </>
    )
}

export default ProductList