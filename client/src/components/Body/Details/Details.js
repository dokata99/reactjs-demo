import { Component } from 'react'
import productServise from './../../../services/productServise'
import './Details.css'


class Details extends Component {

    constructor(props) {
        super(props)

        this.state = {
            laptopInfo: []
        }

    }

    componentDidMount() {

        productServise.getLaptopById(this.props.match.params.id)
            .then(laptopInfo => {
                this.setState({ laptopInfo })
                console.log(laptopInfo)
            })
            

    }

    render() {
        return (
            <div className="laptop-details-main-container">
                <section className="laptop-img-container">
                    <img src={this.state.laptopInfo.imgUrl} alt={this.state.laptopInfo.brand+' '+this.state.laptopInfo.model}/>
                </section>
                <section className="laptop-information-container">
                <p>{this.state.laptopInfo.brand}</p>
                <p>{this.state.laptopInfo.model}</p>
                <p>{this.state.laptopInfo.description}</p>
                <p>Display Size {this.state.laptopInfo.displaySize}</p>
                <p>{this.state.laptopInfo.price} $</p>
                <p>{this.state.laptopInfo.processorName}</p>
                <p>{this.state.laptopInfo.ramSize}</p>
                <p>{this.state.laptopInfo.ramType}</p>
                <p>{this.state.laptopInfo.videoCard}</p>
                </section>
            </div>
        )
    }
}

export default Details