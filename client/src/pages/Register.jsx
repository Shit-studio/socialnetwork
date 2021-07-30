import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerUser } from "../redux/actions/authActions";
import '../scss/Register.scss';

export function Register() {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [errors, setErrors] = React.useState({});

  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      password2: password2
    }
    console.log(newUser);

    dispatch(registerUser(newUser, history));
  }



  return (
    <div>
      <div className="ilyaGay">
        <div className="gay">
          <p>Welcome to the cum zone</p>
        </div>
        <div className="gaytwo">
          <form onSubmit={submitHandler}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              type="text"
              placeholder="Name"
            />
            <br />
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              id="name"
              type="text"
              placeholder="Surname"
            />
            <br />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="Email adress"
            />
            <br />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              placeholder="Password"
            />
            <br />

            <input
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              id="password2"
              type="password"
              placeholder="Confirm password"
            />

            <br />
            <button onSubmit={submitHandler} type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
