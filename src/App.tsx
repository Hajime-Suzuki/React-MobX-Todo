import { Provider } from 'mobx-react'
import * as React from 'react'
import TodoContainer from './components/TodoContainer'
import Todos from './mobx'
import AddTodoFormContainer from './components/AddTodoFormContainer'

export interface TodosConnectedProps {
  todos: Todos
}

class App extends React.Component {
  private todos = new Todos()

  public render() {
    return (
      <Provider todos={this.todos}>
        <div className="App">
          <TodoContainer />
          <AddTodoFormContainer />
        </div>
      </Provider>
    )
  }
}

export default App
