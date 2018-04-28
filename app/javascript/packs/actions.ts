export enum Types {
  AddTodo
}

export class AddTodoPayload {
  constructor(public text: string) {
  }
}

export type TodoActions = AddTodoPayload;

export interface Action<TodoActions> {
  type: Types;
  payload: TodoActions;
}

export function addTodo(text: string): Action<AddTodoPayload> {
  return {
    type: Types.AddTodo,
    payload: new AddTodoPayload(text)
  };
}

