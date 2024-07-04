export const ADD_TASK = "ADD_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const SET_SCORE = "SET_SCORE";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const completeTask = (id, reward) => ({
  type: COMPLETE_TASK,
  payload: { id, reward },
});

export const setScore = (score) => ({
  type: SET_SCORE,
  payload: score,
});
