import React from 'react';
import './ProductDisplay.css'

export const ProductDisplay = (props) => {
    const {product} = props
    return (
        <main className='product-display'>
            <section className="product-display-left">
                <img src={product.image} alt="" />
            </section>
            <section className="product-display-middle">
                <article className='title'>
                    <h1>{product.name}</h1>
                    <h2>{product.price}</h2>
                </article>
                <article className="first-container">
                    <p>Kategori : {product.category}</p>
                    <p>Brand : {product.brand}</p>
                </article>
                <article className="second-container">
                    <p>Deskripsi :</p>
                    <p>{product.desc}</p>
                </article>
                <article className="third-container">
                    
                </article>
                
            </section>
            <section className="product-display-right">

            </section>
        </main>
  )
}
