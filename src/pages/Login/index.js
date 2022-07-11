import { ILBackground } from "assets";
import Button from "elements/Button";
import Input from "elements/Input";
import React, { useRef } from "react";

// custom-hooks
import useForm from "hooks/use-form";

import classes from "./index.module.css";

const Login = (props) => {
  // regex for email
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const {
    inputValue: emailState,
    inputInvalid: emailInvalid,
    onBlur: emailOnblur,
    onChangeHandler: emailChangeHandler,
  } = useForm((value) => emailPattern.test(value));

  // regex for password
  let passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const {
    inputValue: passwordState,
    inputInvalid: passwordInvalid,
    onBlur: passwordOnblur,
    onChangeHandler: passwordChangeHandler,
  } = useForm((value) => passwordPattern.test(value));

  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (emailInvalid) {
      emailRef.current.focus();
    }
    if (passwordInvalid) {
      passwordRef.current.focus();
    }
    if (!emailInvalid && !passwordInvalid) {
      props.onLogin(emailState, passwordState);
    }
  };

  return (
    <section className={classes.login}>
      <div className={classes.loginInner}>
        <div className={classes.loginForm}>
          <div className={classes.loginHeader}>
            <h1>Welcome to small todolist app</h1>
            <h3>Log in here</h3>
          </div>
          <div className={classes.loginContent}>
            <form onSubmit={submitHandler}>
              <Input
                label={"E-mail"}
                value={emailState}
                onChange={emailChangeHandler}
                onBlur={emailOnblur}
                ref={emailRef}
                isValid={!emailInvalid}
              />
              <Input
                label={"Password"}
                type={"password"}
                value={passwordState}
                onChange={passwordChangeHandler}
                onBlur={passwordOnblur}
                ref={passwordRef}
                isValid={!passwordInvalid}
              />
              <Button>Login</Button>
            </form>
          </div>
        </div>
        <div className={classes.loginBanner}>
          <img src={ILBackground} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Login;
