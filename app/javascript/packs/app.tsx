import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createHashHistory} from 'history';
import {Router, Route} from 'react-router';
import {ReduxTodoListPage} from './component';
import {Provider} from 'react-redux';
import * as Redux from 'redux';
import * as Reducers from './reducers';

let history = createHashHistory();
var routes = (
    <Router history={history}>
        <Route path='/' component={ReduxTodoListPage} >
        </Route>
    </Router>
);

let store = Redux.createStore(Reducers.todoApp);

// ReactDOM.render(
//     <Provider store={store}>
//         {routes}
//     </Provider>,
//     document.getElementById('content'));
// 

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.body.appendChild(document.createElement("div")),
  )
})
