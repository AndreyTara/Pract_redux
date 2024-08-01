import s from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectCounter, selectStep } from "../../redux/counter/selectors";
import {
  increment,
  decrement,
  reset,
  changeStep,
} from "../../redux/counter/actions.js";

const Counter = () => {
  const counter = useSelector(selectCounter);
  const step = useSelector(selectStep);

  const dispatch = useDispatch();

  const handlePlusClick = () => {
    dispatch(increment());
  };
  const handleMinusClick = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleChangeStep = (e) => {
    dispatch(changeStep(Number(e.target.value)));
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input value={step} onChange={handleChangeStep} type="number" />
        <div className={s.flex}>
          <button onClick={handleMinusClick} className="btn">
            minus
          </button>
          <button onClick={handleReset} className="btn">
            reset
          </button>
          <button onClick={handlePlusClick} className="btn">
            plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
