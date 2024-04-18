import React from 'react';
import './Popular.css';
import popular_product from '../Assets/popular';
import Item from '../Item/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

export const Popular = () => {
  return (
    <section className='popular-container'>
        <header className="title">
            <FontAwesomeIcon icon={faFire} className='icon'/>
            <h1>BEST SELLER !</h1>
        </header>
        <hr />
        <main className="popular-item">
            {popular_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
            })}
        </main>
    </section>
  )
}
