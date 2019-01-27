import * as React from 'react'
import { Provider, inject, observer } from 'mobx-react'
import Todos from 'src/mobx'
import TodoList from './TodoList'

export interface TodoContainerChildProps {
  todos: Todos
}

class TodoContainer extends React.PureComponent {
  private todos = new Todos()

  render() {
    return (
      <Provider todos={this.todos}>
        <TodoList />
      </Provider>
    )
  }
}

export default TodoContainer
