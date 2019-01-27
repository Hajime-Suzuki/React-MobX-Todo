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
    this.todoList.push({
      id: uuid(),
      name,
      done: false,
      createdAt: new Date()
    })
  }
}

export default Todos
