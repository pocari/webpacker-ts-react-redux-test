import * as React from 'react';
import {Todo, TodoList, TodoUtils} from './models';
import {addTodo} from './actions';
import * as Reducers from './reducers';
import {Dispatch, connect} from 'react-redux';
//import * as ReactRouter from 'react-router';

// TODO 1項目に対応するコンポーネント
interface TodoComposerProps {
    todo: Todo;
}

type AllTodoComposerProps = TodoComposerProps & React.Props<{}>;

const TodoComposer = (props: AllTodoComposerProps) => {
  const todo = props.todo;
  return (
    <li>
      {todo.text}
    </li>
  );
};

// TODOのリスト
interface TodoListComposerProps {
  todos: Todo[];
}

type AllTodoListComposerProps = TodoListComposerProps & React.Props<{}>;

const TodoListComposer = (props: AllTodoListComposerProps) => {
  const todos = props.todos.map(x => <TodoComposer key={x.id} todo={x} />);
  return (
      <div>
          <ul>
              {todos}
          </ul>
      </div>
  );
};

// TODOの入力フォーム
interface TodoFormComposerProps {
  onAddTodo: (text: string) => void;
}

type AllTodoFormComposerProps = TodoFormComposerProps & React.Props<{}>;

const TodoFormComposer = (props: AllTodoFormComposerProps) => {
    const handleSubmit = (e: React.SyntheticEvent<any>) => {
        console.log('handleSubmit');
        e.preventDefault();
        const form = e.currentTarget;

        const text = form.text as HTMLInputElement;
        props.onAddTodo(text.value);
        text.value = '';
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' id='text' />
            <input type='submit' value='追加' />
        </form>
    );
};

interface TodoListPageProps {
    todoList?: TodoList;
}

interface MapDispatchProps {
    dispatch: Dispatch<any>;
}

type AllTodoListPageProps = TodoListPageProps & MapDispatchProps & React.Props<{}>;
const TodoListPage = (props: AllTodoListPageProps) => {
    const { todoList, dispatch } = props;
    return (
        <div>
            <h1>TODOアプリ</h1>
            <TodoFormComposer onAddTodo={x => dispatch(addTodo(x))} />
            {todoList && <TodoListComposer todos={TodoUtils.toList(todoList.todos)} />}
        </div>
    );
};

const mapStateToProps = (state: Reducers.TodoAppState) => {
    return {
        todoList: state.todos
    };
}

const mapDispatchToProps = (dispatch: any): MapDispatchProps => {
    return { dispatch };
}

const enhance = connect<TodoListPageProps, MapDispatchProps, {}>(mapStateToProps, mapDispatchToProps);

export const ReduxTodoListPage = enhance(TodoListPage);
