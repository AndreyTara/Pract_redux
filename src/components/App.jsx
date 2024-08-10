import Counter from "./Counter/Counter";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import css from "./App.module.css";
// import "./index.css";

const App = () => {
  return (
    <div className={css.wrap}>
      {/* <Counter /> */}
      <SearchBox />
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;
