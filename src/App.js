import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import UserInfo from "./components/UserInfo";
import { increment, addAmount } from "./state/slices/counterSlice";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementCounter() {
    dispatch(increment());
  }

  function handleAddAmount() {
    dispatch(addAmount(7));
  }

  return (
    <div className="App">
      <UserInfo />
      <p>{counter}</p>
      <button onClick={handleIncrementCounter}>Increment</button>
      <button onClick={handleAddAmount}>add Amount</button>
    </div>
  );
}

export default App;
