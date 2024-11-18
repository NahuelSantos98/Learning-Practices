import { Provider } from "react-redux"
import store from "./store"
// import Contador from "./components/Contador"
import ShoppingCart from "./components/ShoppingCart"

function App() {
  

  return (
    <Provider store={store}>
      {/* <Contador /> */}
      <ShoppingCart />
    </Provider>
  )
}

export default App
