import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import SignUpFormModal from "../SignUpFormModal";
const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  const handleDemoUser = () =>{
    setEmail('demo@aa.io');
    setPassword('password')
  }

  return (
    <form className="login-form" onSubmit={onLogin}>
      <div className="sign-in-and-register">
        <div className="login-text-container">
          <h1 className="text-login">Sign in</h1>
        </div>
        {/* <div className="register-text"> */}
            <SignUpFormModal />
        {/* </div> */}
      </div>

      <div className="login-container">
        <div className="login-errors">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>

        <div className="login-body">
          <div className="input-field">
            <label className="input" htmlFor="email">
              Email address
            </label>
            <input
              className="credential"
              name="email"
              type="text"
              value={email}
              onChange={updateEmail}
              required
            />
          </div>

          <div className="input-field">
            <label className="input" htmlFor="password">
              Password
            </label>
            <input
              className="credential"
              name="password"
              type="password"
              value={password}
              onChange={updatePassword}
              required
            />
          </div>
          <button
            className="login-button"
            type="submit"
            // disabled={submitted && errors.length > 0}
          >
            Sign in
          </button>
          <button className="demo-user-button login-button" onClick={handleDemoUser}> Demo User </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
