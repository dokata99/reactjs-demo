import './Products.css'
import { Component } from 'react'
import productServise from './../../../services/productServise'
import ProductList from './ProductsList'

class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount() {

        productServise.getAllProducts()
            .then(products => {
                this.setState({ products })
            })
    }
    render() {
        return (
            <div className="presentation">
                <ul className="item-list">
                    <ProductList products={this.state.products}/>
                </ul>
            </div>
        )
    }
}

export default Products