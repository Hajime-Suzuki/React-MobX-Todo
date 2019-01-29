import { inject, observer } from 'mobx-react'
import * as React from 'react'
import { TodosConnectedProps } from 'src/App'
import Todos from 'src/mobx'
import TodoList from './TodoList'

export interface TodoContainerChildProps {
  todoList: Todos['todoList']
  toggleDone: (id: string, done: boolean) => () => void
}

@inject('todos')
@observer
class TodoContainer extends React.Component<Partial<TodosConnectedProps>> {
  toggleDone: TodoContainerChildProps['toggleDone'] = (id, done) => () => {
    this.props.todos!.updateItem(id, { done: !done })
  }

  render() {
    const { todos } = this.props
    if (!todos) return null

    const { todoList } = todos
    if (!todoList.length) return 'No todo'

    return <TodoList todoList={todoList} toggleDone={this.toggleDone} />
  }
}

export default TodoContainer
