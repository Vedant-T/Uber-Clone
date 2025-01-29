import { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectedWrapper = ({
    // eslint-disable-next-line react/prop-types
    children
}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    if (!token) {
        navigate('/captain-login')
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
       }).then(res => {
        if (res.status === 200) {
            const data = res.data;
            setCaptain(data.captain);
            setIsLoading(false);
        }
       }).catch(err => {
        console.log(err)
        localStorage.removeItem('token')
        navigate('/captain-login')
       }
    )
   }, [navigate, setCaptain, token])
    
   if(isLoading){
    return (
        <div>Loading...</div>
    )
   }

  return (
    <>
        {children}    
    </>
  )
}

export default CaptainProtectedWrapper