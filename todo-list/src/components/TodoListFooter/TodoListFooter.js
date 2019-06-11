import React from 'react'
import PropTypes from 'prop-types'
import './TodoListFooter.css'


const filtersBtns = [
  { text: 'all' },
  { text: 'active' },
  { text: 'completed' },

]

const TodoListFooter = ({ amount, filter, changeFilter }) => (
  <footer>
    <div>{amount} items left</div>
    {filtersBtns.map(({ text }) => (<div
      className={text === filter ? 'active' : ''}
      onClick={() => changeFilter(text)} key={text}
    >{text}</div>))
    }
    <div >clear completed</div>
  </footer >
)

export default TodoListFooter

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
