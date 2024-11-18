
const ProductItem = ({data, addToCart}) => {
const {id, name, price} = data

  return (
    <div style={{border: "thin solid gray", padding: "1rem"}}>
        <h4>{name}</h4>
        <h5>${price}</h5>
        <button onClick={()=> addToCart(id)}>Add Cart</button>
    </div>
  )
}

export default ProductItem