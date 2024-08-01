import css from "./Form.module.css";

function LoginForm({ onLogin }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // const arrForm = Array.from(evt.target.elements);
    // arrForm.forEach((item) => {
    //   console.log(item.value);
    // });
    const form = evt.target;
    const { login, password } = form.elements;
    // console.log(login, password);
    // console.log(login.value, password.value);
    onLogin({
      login: login.value,
      password: password.value,
    });
    form.reset();
  };
  return (
    <div className={css.wrap}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.input} type="text" name="login" />
        <input className={css.input} type="password" name="password" />
        <button className={css.btn} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
export default LoginForm;
