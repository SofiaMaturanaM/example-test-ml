import React, { Component } from 'react';

import MLAPI from '../../utils/api-ml';
import ProductList from '../../components/productList/ProductList';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.search = this.search.bind(this);
        this.parseQuery = this.parseQuery.bind(this);
    }
    search(query) {
        MLAPI.getItemsByQuery(query)
            .then(({ items: products, categories }) => {
                this.setState({ products, categories });
            })
            .catch((error) => {
                console.warn('Query error', error);
                alert('Ha ocurrido un error');
            });
    }
    parseQuery(search) {
        const params = new URLSearchParams(search);
        return params.get('q') || '';
    }
    componentWillReceiveProps(nextProps) {
        const newQuery = this.parseQuery(nextProps.location.search);
        const oldQuery = this.parseQuery(this.props.location.search);

        const areValidQuery = newQuery && oldQuery;
        const areDifferentQueries = newQuery !== oldQuery;

        if (areValidQuery && areDifferentQueries) {
            this.search(newQuery);
        }
    }
    componentDidMount() {
        const query = this.parseQuery(this.props.location.search);
        if (query) {
            this.search(query);
        }
    }
    render() {
        return (<ProductList products={this.state.products} />);
    }

}

export default SearchResults;