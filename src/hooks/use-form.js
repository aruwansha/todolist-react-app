import { useState } from "react";

const useForm = (validate) => {
  const [inputValue, setInputValue] = useState("");
  const [inputWasTouched, setInputWasTouched] = useState(false);

  const inputIsValid = validate(inputValue);
  const inputInvalid = !inputIsValid && inputWasTouched;

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onBlur = () => {
    setInputWasTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setInputWasTouched(false);
  };
  
  return {
    inputValue,
    inputIsValid,
    inputInvalid,
    onChangeHandler,
    onBlur,
    reset,
  };
};

export default useForm;
