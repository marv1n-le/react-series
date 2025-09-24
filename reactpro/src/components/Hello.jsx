const name = "Marvin";

function displayMessage() {
  return ("wow, it works!");
}

function Hello() {
  return <h1>Hello from React! {displayMessage()}</h1>
}

export default Hello;