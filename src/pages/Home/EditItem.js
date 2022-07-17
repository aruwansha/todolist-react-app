import React from "react";
import Modal from "parts/UI/Modal";
import Input from "elements/Input";
import Button from "elements/Button";
import useForm from "hooks/use-form";

const EditItem = (props) => {
  const {
    inputValue: editState,
    inputInvalid: editInvalid,
    onChangeHandler: editOnChange,
    onBlur: editOnBlur,
    reset: editReset,
  } = useForm((value) => value.trim() !== "");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(props.id, editState);
    editReset();
    props.onClose();
  };

  return (
    <Modal title={"Edit Your Plans..."} onClose={props.onClose}>
      <form onSubmit={submitHandler}>
        <Input
          label={"Title"}
          value={editState}
          isValid={!editInvalid}
          onChange={editOnChange}
          onBlur={editOnBlur}
        />
        <Button>Submit</Button>
      </form>
    </Modal>
  );
};

export default EditItem;
