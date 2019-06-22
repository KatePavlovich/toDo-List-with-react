import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  clearCompletedTasks,
} from '../../ac'
import './TodoListFooter.css'


const filtersBtns = [
  { text: 'all' },
  { text: 'active' },
  { text: 'completed' },

]

const TodoListFooter = ({
  amount, filter, changeFilter, todos,
}) => (
  <footer>
    <div>{amount} items left</div>
    {filtersBtns.map(({ text }) => (<div
      className={text === filter ? 'active' : ''}
      onClick={() => changeFilter(text)} key={text}
    >{text}</div>))
    }
    <div onClick={() => clearCompletedTasks(todos)}>clear completed</div>
  </footer >
)


export default connect(null, {
  clearCompletedTasks,
})(TodoListFooter)


TodoListFooter.propTypes = {
  amount: PropTypes.number,
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
}

TodoListFooter.defaultProps = {
  amount: 0,
  filter: 'all',
  changeFilter: () => { },
}
