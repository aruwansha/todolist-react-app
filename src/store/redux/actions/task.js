import { FETCH_PAGE, ADD_TASK, DELETE_TASK, EDIT_TASK } from "../types";

export const fetchPage = (url) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };
    try {
      const result = await fetchData();
      dispatch({
        type: FETCH_PAGE,
        payload: { listdata: result },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const add_task = (url, newTask) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ text: newTask }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      return data;
    };

    try {
      await sendRequest();
      dispatch({ type: ADD_TASK, payload: { changed: (state) => !state } });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const delete_task = (url) => async (dispatch) => {
  const deleteTask = async () => {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = response.json();

    return data;
  };
  try {
    await deleteTask();
    dispatch({ type: DELETE_TASK, payload: { changed: (state) => !state } });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const edit_task = (url, newTask) => async (dispatch) => {
  const editTask = async () => {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({ text: newTask }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = response.data;
    return data;
  };

  try {
    await editTask();
    dispatch({
      type: EDIT_TASK,
      payload: { changed: (state) => !state },
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
