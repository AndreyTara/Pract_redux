import clsx from "clsx";
import s from "./Message.module.css";
const Message = ({ author = "default", message = "Default message" }) => {
  // console.log(author);
  return (
    <div>
      {/* <p className={`${s.title} ${s.red}`}> */}
      <p className={clsx(s.title, s.red)}>
        Autor: <span>{author}</span>{" "}
      </p>
      <p className={s.green}>{message}</p>
    </div>
  );
};

export default Message;
