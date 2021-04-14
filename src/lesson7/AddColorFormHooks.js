import { UserInput } from "./hooks";
import styles from "./App.module.css";
export default function AddColorFormHooks({ onNewColor = (f) => f }) {
  const [titleProps, resetInput] = UserInput("");
  const [colorProps, resetColor] = UserInput("");
  const submit = (e) => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetInput("");
    resetColor("");
  };
  return (
    <form onSubmit={submit} className="form">
      <input
        className="input"
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input className="input" {...colorProps} type="color" required />
      <button className={`${styles.button} ${styles.button_large}`}>ADD</button>
    </form>
  );
}
