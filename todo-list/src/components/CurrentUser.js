import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import styled from 'styled-components'
import { signOut } from '../config/firebase'

const CurrentUser = ({
  displayName, photoURL, email, createdAt, children,
}) => {
  console.log('DD / MM / YYYY', createdAt)
  return (
    <CurrentUserSection className="CurrentUser">
      <div >
        {photoURL && <Img src={photoURL} alt={displayName} />}
        <div >
          <Link to="profile"><h2>{displayName}</h2></Link>
          <p className="email">{email}</p>
          {createdAt && <p className="created-at">{moment(createdAt.toDate()).format('DD.MM.YYYY')}</p>}
        </div>
      </div>
      <div>
        <div>{children}</div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </CurrentUserSection>
  )
}

export default CurrentUser

const CurrentUserSection = styled.section`
`

const Img = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;`
