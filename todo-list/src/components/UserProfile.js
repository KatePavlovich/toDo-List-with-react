/* eslint-disable no-return-assign */
import React, { Component } from 'react'
import styled from 'styled-components'
import { Form, Input } from './Styles'
import { auth, firestore, storage } from '../config/firebase'
import withUser from './WithUser'

class UserProfile extends Component {
  state = { displayName: '', fileName: '' }

  imageInput = null

  // eslint-disable-next-line class-methods-use-this
  get uid() {
    return auth.currentUser.uid
  }

  get userRef() {
    return firestore.doc(`users/${this.uid}`)
  }

  get file() {
    return this.imageInput && this.imageInput.files[0]
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })

    if (this.file) {
      this.setState({ fileName: this.imageInput.files[0].name })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { displayName } = this.state

    if (displayName) {
      this.userRef.update({ displayName })
      this.setState({ displayName: '' })
    }

    if (this.file) {
      storage
        .ref()
        .child('user-profiles')
        .child(this.uid)
        .child(this.file.name)
        .put(this.file)
        .then(response => response.ref.getDownloadURL())
        .then(photoURL => this.userRef.update({ photoURL }))
        .then(this.setState({ fileName: '' }))
    }
  }

  render() {
    const { displayName, fileName } = this.state
    const { user } = this.props
    return (
      <Section className="userProfile">
        {user && (
          <>
            <LineWrapper>
              <Img src={user.photoURL} alt={user.displayName} title="to profile" />
              <h1>{user.displayName}</h1>
            </LineWrapper>
            <LineWrapper>
              <span>email:</span>
              <h2>{user.email}</h2>
            </LineWrapper>
          </>
        )}
        <FormStyled onSubmit={this.handleSubmit}>
          <h2>Change name</h2>
          <FormLine gridTemplateColumns="5fr 1fr">
            <Input
              type="text"
              value={displayName}
              name="displayName"
              onChange={this.handleChange}
              placeholder="Display name"
            />
            <Input type="submit" value="Change" />
          </FormLine>
        </FormStyled>
        <FormStyled onSubmit={this.handleSubmit}>
          <h2>Change photo</h2>
          <FormLine gridTemplateColumns="5fr 1fr">
            <InputFile
              type="file"
              name="file"
              id="file"
              ref={ref => (this.imageInput = ref)}
              onChange={this.handleChange}
            />
            <LabelFile for="file">{fileName || 'Choose a file'}</LabelFile>
            <Input type="submit" value="Change" />
          </FormLine>
        </FormStyled>
      </Section>
    )
  }
}
export default withUser(UserProfile)

const Section = styled.section`
  max-width: 600px;
  width: 100%;
  margin: auto;
  padding: 0 2rem;
`

const LineWrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => props.gridTemplateColumns || '1fr 5fr'};
  align-items: center;
`

const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`

const FormStyled = styled(Form)`
  grid-gap: 1rem;
`

const FormLine = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  align-items: center;
  grid-gap: 2rem;
  margin-bottom: 2rem;
`
const InputFile = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`

const LabelFile = styled.label`
  display: inline-block;
  max-width: 350px;
  width: 100%;
  padding: 1rem 0rem 1rem 0.4rem;
  box-sizing: content-box;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.8em;
  text-align: left;
  color: #848187;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  box-shadow: 2px 2px 0 #000;
  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
  }
`
