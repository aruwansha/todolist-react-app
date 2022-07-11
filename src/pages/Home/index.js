import Button from "elements/Button";
import Input from "elements/Input";
import React, { useEffect } from "react";
import classes from "./index.module.css";
import ListItem from "./ListItem";

import useForm from "hooks/use-form";
import { fetchPage, add_task } from "store/redux/actions/task";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task);
  console.log(task.changed);

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

  const removeDataById = (id) => {};

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

  if (task.listdata.length < 1) {
    return;
  }

  const loadedTask = [];

  for (const key in task.listdata) {
    loadedTask.push({
      id: key,
      name: task.listdata[key].text,
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
      <div>
        {loadedTask.map((item) => {
          return (
            <ListItem
              key={item.id}
              id={item.id}
              name={item.name}
              removeItem={removeDataById}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Home;
