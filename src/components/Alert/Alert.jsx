// import st from "./Alert/Alert.module.css";
import "./Alert.css";
import clsx from "clsx";
// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   color: "white",
// };

// const getBgColor = (variant) => {
//   switch (variant) {
//     case "info":
//       return "blue";
//     case "text":
//       return "fuchsia";
//     case "success":
//       return "green";
//     case "error":
//       return "red";
//     case "warning":
//       return "orange";
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

export const Alert = ({ variant, outlined, elevated, children }) => {
  const classNames = ["alert", variant];
  // if (outlined) {
  //   classNames.push("is-outlined");
  // }

  // if (elevated) {
  //   classNames.push("is-elevated");
  // }
  return (
    // <div
    //   style={{
    //     ...alertStyles,
    //     backgroundColor: getBgColor(variant),
    //   }}
    // >
    //   {children}
    // </div>
    <p
      className={clsx(
        "alert",
        variant,
        outlined && "is-outlined",
        elevated && "is-elevated"
      )}
    >
      {children}
    </p>
  );
};
