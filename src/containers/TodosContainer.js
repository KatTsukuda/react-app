import React, {Component} from 'react'
import TodosContainer from '../containers/TodosContainer'

class TodosContainer extends Component {
  render() {
    return (
      <div className='todosContainer'>
        <h2>This is the todos container</h2>
      </div>
    )
  }
}

export default TodosContainer
export default (
  <Route path='/' component={App}>
    <Route path='/todos' component={TodosContainer}/>
  </Route>
)
