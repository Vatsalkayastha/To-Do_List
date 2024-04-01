import {
  ADD_TODO,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_SEARCH_ITEM,
} from "./actionTypes";

export const addtodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const toogletodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removetodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const markcompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});
export const filterTodo = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const updateSearchItem = (searchItem) => ({
  type: UPDATE_SEARCH_ITEM,
  payload: { searchItem },
});
