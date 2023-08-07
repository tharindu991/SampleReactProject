import "../App.css";

function Form() {
  return (
    <div className="App">
      <form>
        <label>
          Enter your name:
          <input type="text" />
        </label>
        <label>
          Enter your email:
          <input type="email" />
        </label>
      </form>
    </div>
  );
}

export default Form;
