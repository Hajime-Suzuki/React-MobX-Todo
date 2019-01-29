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

  @action updateItem(id: string, data: Todo) {
    return () => {
      let target = this.todoList.find(todo => todo.id === id)
      if (!target) return
      const updatedTarget = { ...target, ...data }
      target = updatedTarget
    }
  }

  @action deleteItem(id: string) {
    return () => {
      this.todoList = this.todoList.filter(todo => todo.id !== id)
    }
  }
}

export default Todos
