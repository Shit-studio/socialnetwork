import React from "react";

export function Register() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        
        const newUser = {
            name: name,
            email: email,
            password: password,
            password2: password2
        }

        console.log(newUser);
    }

  return (
    <div>
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          type="text"
        />
        <label htmlFor="name">Name</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
        <label htmlFor="email">Email</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          id="password2"
          type="password"
        />
        <label htmlFor="password2">Password2</label>

        <button onSubmit={submitHandler} type="submit">Sign Up</button>
      </form>
    </div>
  );
}
