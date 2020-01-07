import React, {Component,Fragment} from 'react';
import TodoList from './component/list/index';
import TodoTable from './component/table/index';

class App extends Component {
  render() {
    return (
      <Fragment>
        <TodoList/>
        <TodoTable/>
      </Fragment>
    );
  }
}

export default App;