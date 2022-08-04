import { useDispatch, useSelector } from "react-redux";

import { increment } from "./slices/counterSlice";

import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Counter: {count}</h1>
      <hr />
      <h3>Redux Toolkit Example</h3>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </div>
  );
}

export default App;
