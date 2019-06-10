import React from 'react'
import './TodoListFooter.css'

class TodoListFooter extends React.Component {
  handleFilterChanged = (e) => {
    this.props.onFilterChanged(e.currentTarget.dataset.value)
  }

  render() {
    const { amount, filter } = this.props
    return (
      <footer>
        <div>{amount} items left</div>
        <div
          className={filter === 'all' ? 'selected' : ''}
          data-value="all"
          onClick={this.handleFilterChanged}
        >All</div>
        <div
          className={filter === 'selected' ? 'selected' : ''}
          data-value="selected"
          onClick={this.handleFilterChanged}
        >active</div>
        <div
          className={filter === 'complited' ? 'selected' : ''}
          data-value="complited"
          onClick={this.handleFilterChanged}
        >complited</div>
        <div >clear complited</div>
      </footer>
    )
  }
}

export default TodoListFooter
