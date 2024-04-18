import { Link } from 'react-router-dom';
import './Item.css';
import React from 'react'

const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`} style={{ textDecoration: 'none', color: 'black'}}>
          <img src={props.image} alt="" />
          <article className='desc'>
            <h2>{props.name}</h2>
            <hr />
            <p>Rp. {props.price}</p>
          </article>
        </Link>
        
        
    </div>
  )
}

export default Item;
