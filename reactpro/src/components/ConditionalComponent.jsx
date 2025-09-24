import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  // const display = false;

  // if (display) {
  //   return <Welcome />;
  // } else {
  //   return <Code />;
  // }

  let messageOne = <h1>This is message 1</h1>;
  let messageTwo = <h1>This is message 2</h1>;
  // let message;

  // const display = false;

  // if (display) {
  //   message = messageOne;
  // } else {
  //   message = messageTwo;
  // }

  // return message;

  const display = true;

  return display ? <Welcome /> : <Code />;
}
