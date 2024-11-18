import {configureStore} from "@reduxjs/toolkit"
import contadorReducer from "../reducers/contadorReducer";
import shoppingReducer from '../reducers/shoppingReducer'

const store = configureStore({
  reducer: { 
  contador: contadorReducer,
  shopping: shoppingReducer,
  }
});

// store.subscribe(()=>console.log(store))
//Para que cada que se actualice el store, ejecute este codigo.

export default store;
