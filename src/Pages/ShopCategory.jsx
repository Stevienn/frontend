import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

export const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <article className='title'>
        <h2>Showing Catalogue : </h2><p>{props.category}</p>
      </article>
      
      <hr />
      <section className="shop-container">
        {all_product.map((item,i)=>{
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
          }
          else{
            return null;
          }
        })}
      </section>
    </div>
  )
}
