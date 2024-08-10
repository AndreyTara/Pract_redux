import Counter from "./Counter/Counter";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";

// import "./index.css";

const App = () => {
  return (
    <>
      <Counter />
      <ContactForm />
      <ContactList />
      <SearchBox />
    </>
  );
};

export default App;
