import { useId } from "react";

function SelectBtn() {
  const selectId = useId();

  return (
    <div>
      <label htmlFor={`${selectId}-1`}>Choose language1</label>
      <select id={`${selectId}-1`}>
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
      <label htmlFor={`${selectId}-2`}>Choose language2</label>
      <select id={`${selectId}-2`}>
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
}

export default SelectBtn;
