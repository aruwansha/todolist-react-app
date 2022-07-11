import React, { useImperativeHandle, useRef } from "react";
import classes from "./index.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });
  return (
    <div
      className={`${classes.input} ${!props.isValid ? classes.invalid : ""}`}
    >
      <input
        type={props.type ? props.type : "text"}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        ref={inputRef}
        required
      />
      <label htmlFor={props.label}>{props.label}</label>
    </div>
  );
});

export default Input;
