import * as React from 'react'
import './App.css'
import TodoContainer from './components/TodoContainer'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <TodoContainer />
      </div>
    )
  }
}

export default App
