import React from 'react'
import { signOut } from '../../config/firebase'

const CurrentUser = ({
  displayName, photoURL, email, createdAt, children,
}) => (
  <section className="CurrentUser">
    <div className="CurrentUser--profile">
      {photoURL && <img src={photoURL} alt={displayName} />}
      <div className="CurrentUser--information">
        <h2>{displayName}</h2>
        <p className="email">{email}</p>
        <p className="created-at">{createdAt}</p>
      </div>
    </div>
    <div>
      <div>{children}</div>
      <button onClick={signOut}>Sign Out</button>
    </div>
  </section>
)

export default CurrentUser
