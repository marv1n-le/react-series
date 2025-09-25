import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({firstName: "", lastName: ""});
  function handleChange(e) {
    setName(e.target.value);
    console.log(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <input
          // onChange={function demo(e) => {
          //   return handleChange(e);
          // }}

          onChange={(e) => setName({...name, firstName:e.target.value})}
          type="text"
          value={name.firstName}
        />
        <input type="text" value={name.lastName}
        onChange={(e) => setName({...name, lastName:e.target.value})}
        />
        <button onClick={(e) => {
          handleSubmit(e);
        }}>Add</button>
      </form>
    </div>
  );
}
