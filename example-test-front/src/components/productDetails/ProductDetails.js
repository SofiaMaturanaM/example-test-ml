import React from 'react';

const ProductDetails = ({ product }) => {
    let productDOM = (<section></section>);

    const productInfo = (
        <section>
            <article>
                <img alt={product.title} src={product.picture} />
                <div>
                    <h1>Descripcion del producto</h1>
                    <p>{product.description || `${product.title} Sin descripción.`}</p>
                </div>
            </article>
            <aside>
                <h6>{product.condition} - {product.sold_quantity} vendidos</h6>
                <h1>{product.title}</h1>
                <h4>{product.price.currency} {Number(product.price.amount).toLocaleString('es')}</h4>
                <button type="button">Comprar</button>
            </aside>
        </section>
    );
    if (product.id) {
        productDOM = productInfo;
    }
    return productDOM;
}

export default ProductDetails;