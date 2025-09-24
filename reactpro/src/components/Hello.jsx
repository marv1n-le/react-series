const name = "Marvin";

function displayMessage() {
  return ("wow, it works!");
}

function Hello(props) {
  return <h1>Hello from React! {props.name} {props.message}</h1>
}

export default Hello;                                              