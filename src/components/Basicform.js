import React, { useState } from "react";
import FormStyle from "./FormStyle.css";
function Basicform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    if (email && password && email.includes("@") && password.length >= 4) {
      const newEntry = {
        id: new Date().getTime().toString(),
        name,
        email,
        password,
      };
      setAllEntry([...allEntry, newEntry]);
      setName("");
      setEmail("");
      setPassword("");
    } else if (!email && !password) {
      alert("fill the form");
    } else if (!email.includes("@")) {
      alert("Enter the correct E-mail address");
    } else if (!password.length >= 4) {
      alert("Password must contain atleast 4 characters");
    }
  };
  return (
    <>
      <form action="" onSubmit={submitForm} className="form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="th">
        <span>Name</span>
        <span>E-mail</span>
        <span>Password</span>
      </div>
      {allEntry.map((curElem) => {
        const { id, name, email, password } = curElem;
        return (
          <div className="showDataStyles" key={id}>
            <span>{name}</span>
            <span>{email}</span>
            <span>{password}</span>
          </div>
        );
      })}
    </>
  );
}

export default Basicform;
