import React, { useState, useCallback } from 'react'

import Display from './Display'

import { loginUser } from 'Api/User'
import { useHistory } from 'react-router-dom'

export const Login = ({
  ...props
}) => {

  // get history to redirect
  const history = useHistory()

  // handle input
  const [ email, setEmail ] = useState("")
  const [ pwd, setPwd ] = useState("")
  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value)
  }, [])
  const onChangePwd = useCallback(e => {
    setPwd(e.target.value)
  }, [])

  // submit login form
  const onSubmit = useCallback(e => {
    e.preventDefault()

    loginUser({ email, password: pwd })
      .then(res => {
        // redirect to home page
        history.push("/")
      })
      .catch(err => {
        // TODO: popup here
        const errorStatus = err.response.status
        console.log("erro:", errorStatus)
      })
  }, [ email, pwd, history ])

  return (
    <Display
      {...{
        onSubmit,
        email,
        onChangeEmail,
        pwd,
        onChangePwd,
      }}
      {...props}
    />
  )
}

export default Login
