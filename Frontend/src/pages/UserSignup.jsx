import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({})

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

    if (response.status === 201) {
      const data = response.data; 

      setUser(data.user);
      localStorage.setItem('token', data.token)

      navigate('/home');
    }

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="Uber Logo" />
        <form onSubmit={(e) => {
          submitHandler(e);
        }} action="">
          <h3 className='text-base font-medium mb-2'>What&apos;s your name</h3>
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border-0 w-1/2 text-lg placeholder:text-base'
              placeholder='First Name'
            />

            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border-0 w-1/2 text-lg placeholder:text-base'
              placeholder='Last Name'
            />
          </div>

          <h3 className='text-base font-medium mb-2'>What&apos;s your email</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border-0 text-lg w-full placeholder:text-base'
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border-0 w-full text-lg placeholder:text-base'
            placeholder='Password'
          />

          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Create Account</button>
        </form>

        <p className="text-center">Already have an account? <Link to="/login" className='text-blue-600'>Login Here</Link></p>
      </div>
      <div>
        <p className="text-xs text-center leading-tight">By signing up, you agree to our <span className="underline">Privacy</span> and <span className="underline">Policy</span></p>
      </div>
    </div>
  )
}

export default UserSignup