import React from 'react'
import {Route} from 'react-router'
import App from '../App'
import TodosContainer from '../containers/TodosContainer'
import Todo from '../components/Todo'

export default (
  <Route path='/' component={App}>
    <Route path='/todos' component={TodosContainer} />
    <Route path='/todos/:id' component={Todo} />
  </Route>
)
