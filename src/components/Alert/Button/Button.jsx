import clsx from "clsx";
import { FaBluesky } from "react-icons/fa6";
// Синтаксис імпорту CSS-модуля
import css from "./Button.module.css";

// Отримуємо об'єкт відповідності імен класів
console.log(css); // { alert: "Alert_alert_ax7yz" }

export const Button = ({ variant, outlined, elevated, children }) => {
  // Звертаємось до властивості об'єкта на ім'я className={css.button} класу з файлу CSS-модуля
  return (
    <button
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {<FaBluesky className={css["my-icon"]} size="14" />} {children}
    </button>
  );
};
