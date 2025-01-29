import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import { UserDataContext } from '../context/userContext'

const UserProtectedWrapper = ({
    // eslint-disable-next-line react/prop-types
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const { user, setUser} = useContext(UserDataContext)
    const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    if (!token) {
        navigate('/login')
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }}
    ).then(res => {
            if (res.status === 200) {
                setUser(res.data.user)
                setIsLoading(false)
            }
        }).catch(err => {
            console.log(err)
            localStorage.removeItem('token')
            navigate('/login')
        })
   }, [navigate, setUser, token])

   if (isLoading) {
    return <div>Loading...</div>
   }

  return (
    <>
        {children}    
    </>
  )
}

export default UserProtectedWrapper