import { useId } from "react";

const LangSwitch = ({ lang, onSelect }) => {
  const selectId = useId();
  // const [lang, setLang] = useState("uk");

  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select
        id={selectId}
        value={lang}
        onChange={(evt) => onSelect(evt.target.value)}
      >
        <option value="uk">Ukrainian</option>
        <option value="en">English</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};
export default LangSwitch;
