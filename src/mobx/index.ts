import { observable, action } from 'mobx'
import * as uuid from 'uuid/v4'

export interface Todo {
  id: string
  name: string
  done: boolean
  createdAt: Date
  updatedAt?: Date
}

class Todos {
  @observable todoList: Todo[] = [
    { id: uuid(), name: 'test item', done: false, createdAt: new Date() }
  ]

  @action addItem(name: string) {
    return () =>
      this.todoList.push({
        id: uuid(),
        name,
        done: false,
        createdAt: new Date()
      })
  }

  @action updateItem(id: string, data: Partial<Todo>) {
    const index = this.todoList.findIndex(todo => todo.id === id)
    if (index === undefined) return

    const target = this.todoList[index]
    const updatedTarget = { ...target, ...data }

    this.todoList[index] = updatedTarget
  }

  @action deleteItem(id: string) {
    return () => {
      this.todoList = this.todoList.filter(todo => todo.id !== id)
    }
  }
}

export default Todos
