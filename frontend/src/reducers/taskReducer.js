import { ADD_TASK, COMPLETE_TASK, SET_SCORE } from "../actions/taskActions";

const initialState = {
  tasks: [
    {
      id: 2,
      icon: "telegram",
      description: "Join telegram group",
      reward: 5000,
      link: "https://t.me/sastanaqqamChat",
      completed: false,
    },
    {
      id: 3,
      icon: "telegram",
      description: "Join telegram channel",
      reward: 5000,
      link: "https://t.me/sastanaqqam",
      completed: false,
    },
    {
      id: 4,
      icon: "twitter",
      description: "Follow us on X",
      reward: 5000,
      link: "https://twitter.com/sastanaqqam",
      completed: false,
    },
    {
      id: 5,
      icon: "twitter",
      description: "Retweet the post on X",
      reward: 5000,
      link: "https://x.com/sastanaqqam/status/1804048704237695142",
      completed: false,
    },
  ],
  score: 0,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, completed: true } : task
        ),
        score: state.score + action.payload.reward,
      };
    case SET_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
