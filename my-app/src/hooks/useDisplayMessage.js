import { useState } from "react";

export default function useDisplayMessage() {
  const [message, setMessage] = useState("this is a message");
  function displayMessage() {
    return console.log(message);
  }
  return [ message, displayMessage ];
}