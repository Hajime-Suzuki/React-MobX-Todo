import { inject, observer } from 'mobx-react'
import * as React from 'react'
import { TodoContainerChildProps } from './TodoContainer'

@inject('todos')
@observer
class TodoList extends React.Component<Partial<TodoContainerChildProps>> {
  render() {
    const { todos } = this.props

    if (!todos) return null
    if (!todos.todoList.length) return 'No todo'

    return (
      <>
        {todos.todoList!.map(v => (
          <div key={v.id}>{v.name}</div>
        ))}
      </>
    )
  }
}

export default TodoList
