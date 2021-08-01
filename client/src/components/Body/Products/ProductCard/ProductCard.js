import './ProductCard.css'


const ProductCard = (props) => {

    return (
        <li >
            <article>
                <a href="#">
                    <h2>{props.brand} {props.model}</h2>
                    <ul>
                        <li>
                            AMD Ryzen 9 4900HS
                        </li>
                        <li>
                            NVIDIA GeForce RTX 2060 Max-Q
                        </li>
                        <li>
                            "от 16GB до 40GB DDR4"
                        </li>
                        <li>
                            "от 1TB до 2TB SSD NVMe"
                        </li>
                    </ul>
                    <h3 >2999 BGN</h3>
                </a>
            </article>
        </li>
    )
}

export default ProductCard