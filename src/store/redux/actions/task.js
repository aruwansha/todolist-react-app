import { FETCH_PAGE, ADD_TASK } from "../types";

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
      console.log(error);
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
      console.log(data);

      return data;
    };

    try {
      await sendRequest();
      dispatch({ type: ADD_TASK, payload: { changed: (state) => !state } });
    } catch (error) {
      console.log(error);
    }
  };
};
