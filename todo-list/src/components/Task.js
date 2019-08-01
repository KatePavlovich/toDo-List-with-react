import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import moment from 'moment'
import styled from 'styled-components'
import { firestore } from '../config/firebase'
import { UserContext } from '../providers/UserProvider'
import { collectIdsAndDocs } from '../utilities'

const belongsToCurrentUser = (currentUser, todoAuthor) => {
  if (!currentUser) return false
  return currentUser.uid === todoAuthor.uid
}

const Task = ({
  text, isCompleted, id, user, createdAt,
}) => {
  const [comments, setComments] = useState(0)
  const currentUser = useContext(UserContext)
  const postRef = firestore.doc(`todos/${id}`)
  postRef.collection('comments').onSnapshot((snapShot) => {
    const commentstemp = snapShot.docs.map(collectIdsAndDocs)
    setComments(commentstemp.length)
  })
  const remove = () => postRef.delete()

  return (
    <TaskStyled>
      {/* <input type="checkbox" checked={isCompleted ? 'checked' : ''}
    onChange={() => completeTask(id, isCompleted)} /> */}
      <Link to={`/todos/${id}`}><p className={isCompleted ? 'done' : ''}>{text}</p></Link>
      <div>
        Comments: {comments}
        <p>Posted by {user.displayName}</p>
        <p>{moment(createdAt.toDate()).format('DD.MM.YYYY')}</p>
      </div>
      {belongsToCurrentUser(currentUser, user) && <DeleteBtn onClick={remove}>x</DeleteBtn>}
    </TaskStyled>)
}

export default Task

Task.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  isCompleted: PropTypes.bool,
}

Task.defaultProps = {
  title: 'An Incredibly Hot Take',
  content:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus est aut dolorem, dolor voluptatem assumenda possimus officia blanditiis iusto porro eaque non ab autem nihil! Alias repudiandae itaque quo provident.',
  user: {
    id: '123',
    displayName: 'Bill Murray',
    email: 'billmurray@mailinator.com',
    photoURL: 'https://www.fillmurray.com/300/300',
  },
  createdAt: new Date(),
  comments: 0,
}

const TaskStyled = styled.li`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  align-items: center;
`

const DeleteBtn = styled.span`color: #ddd;
  &:hover {
    color: #000;
}
`


//   .done {
//     text-decoration: line - through;
// }
