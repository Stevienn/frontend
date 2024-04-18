import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../Components/Breadcrum/Breadcrum';
import { ProductDisplayMouse } from '../Components/ProductDisplay/ProductDisplayMouse';
import { ProductDisplayKeyboard } from '../Components/ProductDisplay/ProductDisplayKeyboard';
import { ProductDisplayHeadset } from '../Components/ProductDisplay/ProductDisplayHeadset';

const componentMap = {
  'Mouse': ProductDisplayMouse,
  'Keyboard': ProductDisplayKeyboard,
  'Headset': ProductDisplayHeadset,
}

export const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams(); //useParams to get the Id from parameters of the route
  const product = all_product.find((e)=> e.id === Number(productId))
  const ComponentToRender = componentMap[product.category] || (() => <div>Page not found</div>)
  return (
    <div>
      <Breadcrum product={product} />
      <ComponentToRender product={product} />
      
    </div>
  )
}
