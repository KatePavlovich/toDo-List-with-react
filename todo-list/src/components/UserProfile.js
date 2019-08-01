/* eslint-disable no-return-assign */
import React, { Component } from 'react'
import { auth, firestore, storage } from '../config/firebase'

class UserProfile extends Component {
  state = { displayName: '' }

  imageInput = null;

  // eslint-disable-next-line class-methods-use-this
  get uid() {
    return auth.currentUser.uid
  }

  get userRef() {
    return firestore.doc(`users/${this.uid}`)
  }

  get file() {
    return this.imageInput && this.imageInput.file[0]
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { displayName } = this.state

    if (displayName) {
      this.userRef.update({ displayName })
    }

    if (this.file) {
      storage.ref().child('user-profiles').child(this.uid).child(this.file.name)
        .put(this.file)
        .then(response => response.ref.getDownloadURL())
        .then(photoURL => this.userRef.update({ photoURL }))
    }
  }

  render() {
    const { displayName } = this.state
    return (
      <section className="userProfile">
        <h1>I am userprofile!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={displayName} name="displyName" onChange={this.handleChange} placeholder="Display name"></input>
          <input type="file" ref={ref => (this.imageInput = ref)} />
          <input type="submit" ></input>
        </form>
      </section>)
  }
}
export default UserProfile
