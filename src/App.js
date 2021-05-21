import './App.css';
import React from 'react'
//menghubungkan react dan redux provider
import {Provider} from 'react-redux'
import store from './store'
import Todos from './components/Todos';
import Form from './components/Form';
const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>belajar redux</h1>
        <Todos/>
        <Form/>
      </div>
    </Provider>
  )
}

export default App
