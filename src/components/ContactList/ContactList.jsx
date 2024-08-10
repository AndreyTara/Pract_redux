import css from "./ContactList.module.css";
// import Contact from "../Contact/Contact";
// import { nanoid } from "nanoid";

function ContactList() {
  return (
    <div className={css.wrap}>
      <ul className={css.ul}>
        {/* {contacts.map((contact) => {
          return (
            <>
              <Contact />
            </>
          );
        })} */}
      </ul>
    </div>
  );
}

export default ContactList;
