import { inject, observer } from 'mobx-react'
import * as React from 'react'
import { TodoContainerChildProps } from './TodoContainer'
import { List, ListItem, Checkbox, ListItemText } from '@material-ui/core'
import Todos from 'src/mobx'

@inject('todos')
@observer
class TodoList extends React.Component<Partial<TodoContainerChildProps>> {
  render() {
    const { todos } = this.props

    if (!todos) return null
    const { todoList } = todos
    if (!todoList.length) return 'No todo'
    return (
      <List>
        {todoList.map(todo => {
          return (
            <ListItem key={todo.id} button onClick={todos.deleteItem(todo.id)}>
              <Checkbox checked={todo.done} />
              <ListItemText>{todo.name}</ListItemText>
            </ListItem>
          )
        })}
      </List>
    )
  }
}

export default TodoList
{
  /* <ListItem key={value} role={undefined} dense button onClick={this.handleToggle(value)}>
          <Checkbox
            checked={this.state.checked.indexOf(value) !== -1}
            tabIndex={-1}
            disableRipple
          />
          <ListItemText primary={`Line item ${value + 1}`} /> */
}
