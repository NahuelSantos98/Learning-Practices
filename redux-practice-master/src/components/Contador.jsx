import { useDispatch, useSelector } from "react-redux"
import {reset, restar, restar5, sumar, sumar5} from '../actions/contadorActions'


const Contador = () => {
  const contador = useSelector((state) => state.contador);
  const dispatch = useDispatch()


  return (
    <div>
        <h2>Contador Redux</h2>

        <div style={{display: "flex", gap: "1rem", alignItems: "center", justifyContent: "center"}}>
          <button onClick={()=> dispatch(restar5())} >
            -5
          </button>
          <button onClick={()=> dispatch(restar())}  >
            -
          </button>
                  <p>{contador}</p>
          <button onClick={()=> dispatch(sumar())}  >
            +
          </button>
          <button onClick={()=> dispatch(sumar5())}  >
            +5
          </button>
        </div>
        <button style={{alignSelf: "center"}} onClick={()=> dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Contador