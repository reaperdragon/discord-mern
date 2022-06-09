import React from 'react'
import InputField from "./InputField";

const RegisterInputs = ({email,setEmail,username,setUsername,password,setPassword}) => {
  return (
     <>
      <InputField
        value={email}
        setValue={setEmail}
        label="email"
        type="email"
        placeholder="Enter an Email"
          />
          
        <InputField
        value={username}
        setValue={setUsername}
        label="Username"
        type="username"
        placeholder="Enter an Username"
      />

      <InputField
        value={password}
        setValue={setPassword}
        label="password"
        type="password"
        placeholder="Enter Password"
      />
    </>
  )
}

export default RegisterInputs