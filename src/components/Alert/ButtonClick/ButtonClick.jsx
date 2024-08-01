import css from "./ButtonClick.module.css";
// import { useState } from "react";
// function ButtonClick() {
//   // const handleClick = () => {
//   //   alert("I'm a button!");
//   // };
//   return (
//     <div className={css.container}>
//       <button onClick={() => alert("I'm a button!!!")} className={css.btn}>
//         First button
//       </button>
//       <button onClick={(evt) => console.log(evt)} className={css.btn}>
//         Second button
//       </button>
//     </div>
//   );
// }

// const CustomButton = ({ message, children }) => {
//   return (
//     <button className={css.btn} onClick={() => alert(message)}>
//       {children}
//     </button>
//   );
// };

// function ButtonClick() {
//   return (
//     <div className={css.container}>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data!">Upload data</CustomButton>
//     </div>
//   );
// }

// function ButtonClick() {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <div className={css.container}>
//       <button className={css.btn} onClick={handleClick}>
//         Current: {clicks}
//       </button>
//     </div>
//   );
// }

// function ButtonClick() {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button className={css.btn} onClick={handleClick}>
//         Current: {clicks}
//       </button>
//       <button className={css.btn} onClick={handleToggle}>
//         {isOpen ? "Hide" : "Show"}
//       </button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// }
// ++++++++++++++++++++++++++
// function ButtonClick() {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <button className={css.btn} onClick={handleClick}>
//       Current: {clicks}
//     </button>
//   );
// }

// =----------------------
// const ClickCounter = ({ onUpdate, value, valueT }) => {
//   return (
//     <button className={css.btn} onClick={onUpdate}>
//       Current: {value} {valueT ? "true" : "false"}
//     </button>
//   );
// };
// function ButtonClick() {
//   const [clicks, setClicks] = useState(0);
//   const [toggle, setToggle] = useState(true);
//   const handleClick = () => {
//     setClicks(clicks + 1);
//     setToggle(!toggle);
//   };

//   return (
//     <>
//       <ClickCounter onUpdate={handleClick} value={clicks} valueT={toggle} />
//       <ClickCounter onUpdate={handleClick} value={clicks} valueT={toggle} />
//     </>
//   );
// }
// =----------------------update value

// function ButtonClick() {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button className={css.btn} onClick={updateX}>
//         Update x
//       </button>
//       <button className={css.btn} onClick={updateY}>
//         Update y
//       </button>
//     </div>
//   );
// }

// =----------------------Хук useEffect
// import { useState, useEffect } from "react";

// const Modal = () => {
//   useEffect(() => {
//     setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);
//   }, []);

//   return <div>Modal</div>;
// };
// function ButtonClick() {
// const [isOpen, setIsOpen] = useState(false);
// return (
//   <div>
//     <button onClick={() => setIsOpen(!isOpen)}>
//       {isOpen ? "Close" : "Open"}
//     </button>
//     {isOpen && <Modal />}
//   </div>
// );
// useEffect(() => {
//   console.log("Effect");
//   return () => {
//     console.log("Clean up");
//   };
// });
// return <div>App</div>;
// }
//+++++++++++++++++++++++++++++++++++

// const Modal = () => {
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <div>Modal</div>;
// };

// function ButtonClick() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close" : "Open"}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// }
// import { useState, useEffect } from "react";

// const ButtonClick = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, [clicks]);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };
// =----------------------Хук useEffect many
// import { useState, useEffect } from "react";

// const ButtonClick = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);

//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, [clicks]);

//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };
// =----------------------Хук useEffect & useState many
// import { useState, useEffect } from "react";

// const ButtonClick = () => {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log("First updated: ", first);
//   }, [first]);

//   useEffect(() => {
//     console.log("Second updated: ", second);
//   }, [second]);

//   useEffect(() => {
//     console.log("First or second updated: ", first + second);
//   }, [first, second]);

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}>First: {first}</button>
//       <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
//     </>
//   );
// };
// =----------------------Хук localStoradge
// import { useState, useEffect } from "react";

// const ButtonClick = () => {
//   // const [clicks, setClicks] = useState(0);

//   // return (
//   //   <div>
//   //     <button onClick={() => setClicks(clicks + 1)}>
//   //       You clicked {clicks} times
//   //     </button>
//   //     <button onClick={() => setClicks(0)}>Reset</button>
//   //   </div>
//   // );

//   const [clicks, setClicks] = useState(0);
//   // const [] = useState(0);
//   // const [objLS, setObjLS] = useState(() => {
//   //   return 0;
//   // });
//   const [clicksBtn, setClicksBtn] = useState(() => {
//     // Зчитуємо значення за ключем
//     const savedObject = window.localStorage.getItem("saved-clicks");

//     // Якщо там щось є, повертаємо це
//     // значення як початкове значення стану
//     if (savedObject !== null) {
//       return JSON.parse(savedObject);
//     }

//     // У протилежному випадку повертаємо
//     // яке-небудь значення за замовчуванням
//     return {};
//   }, [{}]);

//   useEffect(() => {
//     console.log(`Clicks changed - ${clicks}`);
//     window.localStorage.setItem("saved-clicks", clicks);
//     window.localStorage.setItem(
//       "clicks-btn",
//       JSON.stringify({ clicks: clicks })
//     );
//     console.log({ clicksBtn });
//   });
//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };
import { useState, useEffect } from "react";

const ButtonClick = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = +window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return savedClicks;
    }
    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", clicks);
    window.localStorage.setItem(
      "clicks-btn",
      JSON.stringify({ clicks: clicks })
    );
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
};
export default ButtonClick;
