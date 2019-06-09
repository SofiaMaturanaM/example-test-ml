import React, { Component } from 'react';
import MLAPI from '../../utils/api-ml';
import ProductDetails from '../../components/productDetails/ProductDetails';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                price: {}
            }
        };
        this.search = this.search.bind(this);
    }
    search() {
        MLAPI.getItemById(this.props.match.params.id)
            .then(({ item: product }) => {
                this.setState({ product });
            })
            .catch((error) => {
                console.warn('Query error', error);
                alert('Ha ocurrido un error');
            });
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.search();
        }
    }
    render() {
        return (<ProductDetails product={this.state.product} />);
    }

}

export default ProductDetail;