import React from 'react'

const CartItem = ({data, removeItem, removeAllItems}) => {
    const {id, name, price, quantity } = data
  return (
    <div style={{borderBottom: 'thin solid gray'}}>
        <h4>{name}</h4>
        <h5>{price * quantity}</h5>
        <p>Quantity: {quantity}</p>
        <button onClick={()=> removeItem(id)}>Remove Item</button>
        <button onClick={()=> removeAllItems(id)}>Remove All items</button>
    </div>
  )
}

export default CartItem