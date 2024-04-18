import React from 'react';
import './NewArrival.css';
import Item from '../Item/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import new_arrival from '../Assets/newarrival';

export const NewArrival = () => {
  return (
    <section className='new-container'>
        <header className="title">
        <FontAwesomeIcon icon={faBell} className='icon' />
            <h1>NEW ARRIVAL !</h1>
        </header>
        <hr />
        <main className="new-item">
            {new_arrival.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
            })}
        </main>
    </section>
  )
}
