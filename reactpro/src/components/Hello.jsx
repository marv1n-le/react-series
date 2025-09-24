const name = "Marvin";

function displayMessage() {
  return ("wow, it works!");
}

function Hello({ name, message, emoji }) {
  // const { name, message } = props;
  return <h1>Hello from React! {name} {message} {emoji}</h1>;
}

export default Hello;                                              