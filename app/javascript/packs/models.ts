import * as _ from 'lodash';

export class Todo {
  id: number = Date.now();
  constructor(
    public text: string,
    public completed: boolean = false
  ) {}
}

type Todos = {
  [key: number]: Todo
};

export class TodoList {
  todos: Todos = {};
}

export class TodoUtils {
  static toList(todos: Todos) {
    return _.map(todos, e => e)
  }
}


