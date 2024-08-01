// import clsx from "clsx";
import s from "./Header.module.css";
const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>Logo</div>
      <h1 className={s.title}>Super Puper</h1>
      {/* <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul> */}
    </header>
  );
};

export default Header;
