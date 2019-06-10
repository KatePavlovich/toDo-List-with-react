import React from 'react'
import './TodoListFooter.css'

class TodoListFooter extends React.Component {
  handleFilterChanged = (e) => {
    this.props.changeFilter(e.currentTarget.dataset.value)
  }

  render() {
    const { amount, filter } = this.props
    return (
      <footer>
        <div>{amount} items left</div>
        <div
          className={filter === 'all' ? 'active' : ''}
          data-value="all"
          onClick={this.handleFilterChanged}
        >All</div>
        <div
          className={filter === 'active' ? 'active' : ''}
          data-value="active"
          onClick={this.handleFilterChanged}
        >active</div>
        <div
          className={filter === 'complited' ? 'active' : ''}
          data-value="completed"
          onClick={this.handleFilterChanged}
        >completed</div>
        <div >clear completed</div>
      </footer>
    )
  }
}

export default TodoListFooter
