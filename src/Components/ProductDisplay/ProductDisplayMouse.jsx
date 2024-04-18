import React, { useEffect, useState } from 'react';
import './ProductDisplay.css'

export const ProductDisplayMouse = (props) => {
    const {product} = props
    const [jumlah, setJumlah] = useState(1);
    const addButton = () =>{
        setJumlah(jumlah+1);
    }
    const removeButton = () =>{
        setJumlah(jumlah-1);
        if(jumlah === 1){
            setJumlah(1);
        }
    }
    const [total, setTotal] = useState(product.price)
    useEffect(() => {
        setTotal(product.price * jumlah);
    }, [jumlah]);
    return (
        <main className='product-display'>
            <section className="product-display-left">
                <img src={product.image} alt="" />
            </section>
            <section className="product-display-middle">
                <article className='title'>
                    <h1>{product.name}</h1>
                    <h2>Rp. {product.price}</h2>
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
                    <p>DPI : {product.dpi}</p>
                    <p>Sensor : {product.sensor}</p>
                    <p>Switch : {product.switch}</p>
                    <p>Weight : {product.weight}</p>
                    <p>Software : {product.software}</p>
                    <p>Warranty : {product.warranty}</p>
                    <p>Dimension : {product.dimension}</p>
                    <p>Connectivity : {product.connectivity}</p>
                </article>
            </section>
            <section className="product-display-right">
                <h1>Belanja Sekarang</h1>
                <hr />
                <article className='count-container'>
                    <p>Jumlah</p>
                    <button onClick={removeButton}>-</button>
                    {jumlah}
                    <button onClick={addButton}>+</button>
                </article> 
                <article className="total-container">
                    <p>Total :</p>
                    <h2>Rp. {total}</h2>
                </article>
                <button>ADD TO CART</button>
            </section>
        </main>
  )
}
