import React from 'react';
import { Link } from 'react-router-dom';

const ProductResume = ({ product }) => {
    return (
        <article>
            <Link to={`/items/${product.id}`}>
                <img alt={product.title} src={product.picture}/>
            </Link>
            <header>
                <h1>{product.price.currency} {Number(product.price.amount).toLocaleString('es')}</h1>
                {
                    product.free_shipping && <mark><i>Envio Gratuito</i></mark>
                }
                <p>{product.title}</p>
            </header>
            <aside>
                <h5>{product.address}</h5>
            </aside>
        </article>);
}

export default ProductResume;