import * as Redux from 'redux';
import { Action, Types, TodoActions, AddTodoPayload } from './actions';
import { TodoList, Todo } from './models';

const addTodo = (state: TodoList, payload: AddTodoPayload) => {
  var todos = { ...state.todos};
  var todo = new Todo(payload.text);
  todos[todo.id] = todo;
  return {
      todos: todos
  };
};

export const todos = (state: TodoList = new TodoList(), action: Action<TodoActions>) => {
  switch(action.type) {
    case Types.AddTodo:
      return addTodo(state, action.payload);
    default:
      return state;
  }
};

export interface TodoAppState {
  todos; TodoList
}

export const todoApp = Redux.combineReducers({
  todos
});

