import React from 'react'
import "./item.css"

const Item = ({image,name,old_price,new_price}) => {
  return (
    <div className='item'>
      <img src={image} alt='product Image'/>
      <p>{name}</p>
      <div className="productPrice">
        <div className="item_price_old">
           $ {old_price}
        </div>
        <div className="item_price_new">
           $ {new_price}
        </div>
      </div>
    </div>
  )
}

export default Item
