import React from 'react';
import FacebookLoginButton from 'Components/FacebookLoginButton'
import GoogleLoginButton from 'Components/GoogleLoginButton'

function SignIn() {
  return (
    <div className="sign-in-container">
      <FacebookLoginButton></FacebookLoginButton>
      <GoogleLoginButton></GoogleLoginButton> 
    </div>
  )
}

export default SignIn