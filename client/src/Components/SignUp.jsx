import React from 'react'

export default function SignUp(props) {
  return (
    <div className="form-container">
      <form
      className="signup-form"
      onSubmit={props.submitUserInfo}>

        {/* <label htmlFor="firstName">First Name</label> */}
        <input
          className="form-input"
          placeholder="First name"
          id="firstName"
          type="text"
          name="firstName"
          onChange={props.handleUserInfo}
          value={props.userInfo.firstName}
        />

        {/* <label htmlFor="lastName">Last Name</label> */}
        <input
          className="form-input"
          placeholder="Last name"
          id="lastName"
          type="text"
          name="lastName"
          value={props.userInfo.lastName}
          onChange={props.handleUserInfo}
        />

        {/* <label htmlFor="birthDate">Birthday</label> */}
        <input
          className="form-input"
          placeholder="Birthday (MM/DD/YY)"
          id="birthDate"
          type="text"
          name="birthDate"
          value={props.userInfo.birthDate}
          onChange={props.handleUserInfo}
        />

        {/* <label htmlFor="email">Email</label> */}
        <input
          className="form-input"
          placeholder="Email address"
          id="email"
          type="text"
          name="email"
          value={props.userInfo.email}
          onChange={props.handleUserInfo}
        />

        {/* <label htmlFor="password">Password</label> */}
        <input
          className="form-input"
          placeholder="Password"
          id="password"
          type="password"
          name="password"
          value={props.userInfo.password}
          onChange={props.handleUserInfo}
        />

         {/* <label htmlFor="confirmationPassword">Confirm Password</label> */}
        <input
          className="form-input"
          placeholder="Confirm password"
          id="confirmationPassword"
          type="password"
          name="confirmationPassword"
          value={props.userInfo.confirmationPassword}
          onChange={props.handleUserInfo}
        />

        <div className="form-marketing">
        <input
          id="receiveNewsletter"
          type="checkbox"
          name="receiveNewsletter"
          checked={props.userInfo.receiveNewletter}
          onChange={props.handleUserInfo}
        />
        <label htmlFor="receiveNewletter">Yes, sign me up for free recipes every week!</label>
        </div>

        <button className="form-submit-button">Sign Up</button>
      </form>
    </div>
  )
}