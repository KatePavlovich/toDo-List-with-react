import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import {
//   clearCompletedTasks,
// } from '../ac'
import styled from 'styled-components'


const filtersBtns = [
  { text: 'all' },
  { text: 'active' },
  { text: 'completed' },

]

const TodoListFooter = ({
  amount, filter, changeFilter, todos,
}) => (
  <Footer>
    <div>{amount} items left</div>
    {filtersBtns.map(({ text }) => (<div
      className={text === filter ? 'active' : ''}
      onClick={() => changeFilter(text)} key={text}
    >{text}</div>))
    }
    {/* <div onClick={() => clearCompletedTasks(todos)}>clear completed</div> */}
  </Footer >
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


const Footer = styled.footer`
  display: grid;
  grid-template-columns: 2fr repeat(5, 1fr);
`

// .active { color: red;}
