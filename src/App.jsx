import { useDispatch, useSelector } from "react-redux";
import {decrement, increment} from './action'
import Posts from "./Posts";

function App() {
  const count = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Posts/>
      {/* <h1>{count}</h1>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(increment())}>Increment</button> */}
    </div>
  );
}

export default App;
