import React, { useEffect, useState } from 'react';
import './ProductDisplay.css'

export const ProductDisplayHeadset = (props) => {
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
                <div className="main-img">
                    <img src={product.image} alt="" />
                </div>
                <div className="sub-img">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
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
                    <p>Driver : {product.driver}</p>
                    <hr />
                    <p>Weight : {product.weight}</p>
                    <hr />
                    <p>Warranty : {product.warranty}</p>
                    <hr />
                    <p>Frequency : {product.frequency}</p>
                    <hr />
                    <p>Impendance : {product.impendance}</p>
                    <hr />
                    <p>Connectivity : {product.connectivity}</p>
                </article>
            </section>
            <section className="product-display-right">
                <div className="wrapper">
                    <h1>Belanja Sekarang</h1>
                    <hr />
                    <article className='count-container'>
                        <p>Jumlah</p>
                        <div className="counter">
                            <button onClick={removeButton}>-</button>
                            {jumlah}
                            <button onClick={addButton}>+</button>
                        </div>
                        
                    </article> 
                    <article className="total-container">
                        <h3>Total :</h3>
                        <h2>Rp. {total}</h2>
                    </article>
                    <button>ADD TO CART</button>
                </div>
            </section>
        </main>
  )
}
