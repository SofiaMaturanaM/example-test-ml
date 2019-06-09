import React from 'react';
import ProductResume from '../productResume/ProductResume';

const ProductList = ({ products = [] }) => {
    return (
        <section>
            {products.map(product => <ProductResume key={product.id} product={product} />)}
        </section>
    );
}

export default ProductList;