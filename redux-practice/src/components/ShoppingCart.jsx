import { useDispatch, useSelector } from "react-redux"
import ProductItem from "./ProductItem"
import { addToCart, clearCart, removeFromCart } from "../actions/shoppingActions"
import CartItem from "./CartItem"


const ShoppingCart = () => {
    const state = useSelector(state=> state.shopping)
    const dispatch = useDispatch()
    
  return (
    <div style={{textAlign: "center"}}>
        <h2>Carrito de compras</h2>
        <h3>Productos</h3>
        <article style={styles}>
            {state.products.map(item=> <ProductItem data={item} key={item.id} addToCart={(id)=> dispatch(addToCart(id))}/>)}
{/* Para tener la logica separada, conviene hacer un callback dentro de addToCart que ya haga el dispatch con la function */}
        </article>
        <h3>Carrito</h3>
        <button onClick={()=>dispatch(clearCart())}>
            Limpiar Carrito
          </button>
        <article style={styles}>
          {state.cart.map((item)=> <CartItem data={item} key={item.id} removeItem={(id)=> dispatch(removeFromCart(id))} removeAllItems={(id)=> dispatch(removeFromCart(id, true))} />)}
        </article>
    </div>
  )
}

export default ShoppingCart



const styles = {
  padding: "1rem", 
  margin: "1rem", 
  boxShadow: "0 0 1rem #00000025 inset",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "1rem"
};