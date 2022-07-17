import Button from "elements/Button";
import Input from "elements/Input";
import React, { useEffect } from "react";
import classes from "./index.module.css";
import ListItem from "./ListItem";

import useForm from "hooks/use-form";
import {
  fetchPage,
  add_task,
  delete_task,
  edit_task,
} from "store/redux/actions/task";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(
      fetchPage(
        "https://react-testing-3d213-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json"
      )
    );
    if (task.changed) {
      return;
    }
  }, [dispatch, task.changed]);

  const {
    inputValue: todoState,
    inputInvalid: todoInvalid,
    onChangeHandler: todoOnChange,
    onBlur: todoOnBlur,
    reset: todoReset,
  } = useForm((value) => value.trim() !== "");

  const removeTaskById = (id) => {
    dispatch(
      delete_task(
        `https://react-testing-3d213-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${id}.json`
      )
    );
  };

  const editTaskById = (id, newTask) => {
    dispatch(
      edit_task(
        `https://react-testing-3d213-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${id}.json`,
        newTask
      )
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      add_task(
        "https://react-testing-3d213-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
        todoState
      )
    );
    todoReset();
  };

  const loadedTask = [];

  for (const key in task.listdata) {
    loadedTask.push({
      id: key,
      name: task.listdata[key].text,
    });
  }

  let listTask = null;

  if (task.listdata) {
    listTask = loadedTask.map((item) => {
      return (
        <div>
          <ListItem
            key={item.id}
            id={item.id}
            name={item.name}
            removeItem={removeTaskById}
            editItem={editTaskById}
          />
        </div>
      );
    });
  }

  return (
    <section className={classes.todoList}>
      <div className={classes.newTodo}>
        <h1>Write your big plans</h1>
        <form onSubmit={submitHandler}>
          <Input
            label={"New toDo"}
            value={todoState}
            isValid={!todoInvalid}
            onChange={todoOnChange}
            onBlur={todoOnBlur}
          />
          <Button>Add</Button>
        </form>
      </div>
      {listTask}
    </section>
  );
};
export default Home;
