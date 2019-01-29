import { Checkbox, List, ListItem, ListItemText } from '@material-ui/core'
import * as React from 'react'
import { TodoContainerChildProps } from './TodoContainer'

class TodoList extends React.Component<TodoContainerChildProps> {
  render() {
    const { todoList } = this.props
    return (
      <List>
        {todoList.map(todo => {
          return (
            <ListItem
              key={todo.id}
              button
              onClick={this.props.toggleDone(todo.id, todo.done)}
            >
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
