import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'

const root = document.getElementById('root')
ReactDOM.render(<App />, root as HTMLElement)

if ((module as any).hot) {
  (module as any).hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(<NextApp />, root)
  })
}
