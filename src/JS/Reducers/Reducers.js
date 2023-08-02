import { generateId, lastId } from "../../Functions/idGenerator";
import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
} from "../ActionTypes/ActionTypes";

const initialState = {
  listTasks: [
    {
      id: generateId(),
      text: `Task ${lastId}`,
      description: "go gym",
      isDone: false,
    },
    {
      id: generateId(),
      text: `Task ${lastId}`,
      description: "go work",
      isDone: false,
    },
    {
      id: generateId(),
      text: `Task ${lastId}`,
      description: "go sleep",
      isDone: false,
    },
  ],
};

export const toDoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DONE_TASK:
      return {
        ...state,
        listTasks: state.listTasks.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        listTasks: state.listTasks.filter((el) => el.id !== payload),
      };
    case ADD_TASK:
      return {
        ...state,
        listTasks: [...state.listTasks, payload],
      };
    case EDIT_TASK:
      return {
        ...state,
        listTasks: state.listTasks.map((el) =>
          el.id === payload.id
            ? { ...el, text: payload.text, description: payload.description }
            : el
        ),
      };
    default:
      return state;
  }
};
