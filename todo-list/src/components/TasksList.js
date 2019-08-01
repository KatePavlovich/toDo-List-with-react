import React, { useContext } from 'react'
import styled from 'styled-components'
import Task from './Task'
import { TodosContext } from '../providers/TodosProvider'
import TaskInput from './TaskInput'

const TasksList = () => {
  const todos = useContext(TodosContext)
  console.log('todos from tasklist', todos)
  return (
    <section>
      <TaskInput />
      <List >
        {todos.map(task => (
          <Task {...task} key={task.id} />))}
      </List >
    </section>)
}


export default TasksList

const List = styled.ul`
    display: grid;
    grid-gap: 0.5em;
  `
