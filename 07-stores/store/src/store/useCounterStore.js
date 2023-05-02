import { useSelector, useDispatch } from "react-redux";
import { clear, decrement, increment } from "../features/counter/counterSlice";

export const useCounterStore = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return {
    counter,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    clear: () => dispatch(clear()),
  };
};
