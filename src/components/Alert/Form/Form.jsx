// import css from "./LoginForm.module.css";
import LoginForm from "./LoginForm";
function Form() {
  const onLogin = (userData) => {
    console.log(userData);
  };
  return (
    <div>
      <h1>Please login to your account!</h1>
      <LoginForm onLogin={onLogin} />
    </div>
  );
  ои;
}
export default Form;
