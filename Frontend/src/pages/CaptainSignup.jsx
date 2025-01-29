import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const CaptainSignup = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('car');

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')

    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-10' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAMAAAAKqCSwAAAAe1BMVEUAAAD////6+vrv7+8GBgYMDAzs7OwnJyciIiL8/PwVFRWenp4dHR2RkZHm5ubz8/OmpqasrKxbW1uIiIje3t7S0tJmZmZWVlaYmJh0dHTg4ODJycmDg4M6Ojq/v79FRUUuLi56enq1tbVGRkZpaWlPT080NDTDw8POzs4kWmZZAAAEZklEQVR4nO3da3eiMBAGYC4iCCoiiLVe2+3t///ChePpVrc0M5PMANnN+115jieGXCbg+dbEGxqAj6NKxE5qsFrHkTeiRPG6CLqoRTI0rStJ8Y062w2N+im72V/U0Uob6z21GNqjSnFLDUbZTj+TBDfU1dAadYob6nZojDrrG2o8NEad+IY6qp7/e6Ib6tAWKI4qEUeViKNKxFEl4qgScVSJOKpEHFUijiqR/5maHuuy2G8ewyAIq82+KOtjyvPNrNSkziq/I1W2no+JGh82Xcw/3IPpOgMTNdopndfsd0ZNgYWalCEMbZMvDBoCAzVZzVS8+wSZdjswpkZloKJ1YBeaK06m1HpKg7ZZrgegzp/p0DYnnSZrRN1q/KTXhBqLuQbUSaYLbbOY9EdNTybSppeldrLa1EvnLZSSirhNokt9026mX5ke+6AekbcndXKSVY96zDmkTUfwJk2NWX7TNkvCbVaHmhr/o77yiO8HNKgTw17qPu/o/lWDatTzf08pR93ySvEbpmTqnO0v9ZkcOXYhUzXHUqo8y1Brfim2CRCp0VKCukT1WERqKSFtRoT81IQ4j8ImwPyzaNSVjNT3H7ipCWEWTQumxIdEXUhJUT8rhZoyDf26ksOLAxTqTnUt09SsVMQKmn72nNRYUur7F0bqQZZ6YKSCY//H84/D5Mn5Efo02ALw1AT8Xc6qj5/Bj0MDATx1DV5LOfWYgB+H1gfxVHiegriSKlClJ54KT1MNqRUXNQUvZUqdATcsNPUoTvWBZSE0FTFTMaUC91Y0FTH+N6UCcwE0tVBdhIcKdAFoqnFg6ske6sYe6tIeau6oAtTQHurUHqpFfytgaDUmKtctoIcba8ZE7WG4AsxZ0VSLBoE9DK2VM95/c8LigWsOplRgYDWmyTXQAYxpyQJatsRT5+C1DBeCoK0LPNVsee0X2NQ/oOsTqMKLlk+MVOGlYLDegkD19pJSqKsa0bbFCytVcjMo5N0MktxiQ5SFkKhzod3g5v7PvXHJXWHzFeimSqfGQvvBqPIVGlWqtYJ7VhpUmYKQKapQnEhFjK80gisTp1I91iq7a5APUSFT5ww1tveZIisYyVTvlZsqVmjH3gugCpc0qRPWEdZJsiiUtdS2Ei219byErXedChcwe96bNWXhPMcCiFLt9dULQxugSfWXghPzgyHE82zaVC99N5Oeejtu0/SvRsWsDz0eYmryql0iHmqcuTOiah+4e9Y50GpG9bytRk8wHeIYY5NoQZzG5uVAh0ObzB8I2FmmfT6YgdpikTfasDR4FiELtWkGNWJkuHkxehIdE7XJpfxQOT+eRnLo/pp0vao6FjVmm6xmeAglK7VNdKwXq9NmmYdhuKxO2aE+Mz2AkJ0qF0eViKNKxFEl4qgScVSJOKpEHFUijioRR5WInVSLHhdv0UP49dbnesvtqw1G/RaO+xdGWPQajnH/rHcvNxn1K2Oe/HuqRS/isej1Ru1/q7DlpVGjj6NKxFEl8hsP3kEn7vCL+gAAAABJRU5ErkJggg==" alt="Uber Logo" />
        <form onSubmit={(e) => {
          submitHandler(e);
        }} action="">
          <h3 className='text-base font-medium mb-2'>What&apos;s our Captain&apos;s name</h3>
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

          <h3 className='text-base font-medium mb-2'>What&apos;s our Captain&apos;s your email</h3>
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

          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>

          <div className="flex gap-4 mb-6">
            <input
              type="text"
              required
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border-0 w-1/2 text-lg placeholder:text-base'
              placeholder='Vehicle Color'
            />

            <input
              type="text"
              required
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border-0 w-1/2 text-lg placeholder:text-base'
              placeholder='Vehicle Plate'
            />
          </div>

          <div className="flex gap-4 mb-6">
            <input
              type="number"
              required
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border-0 w-1/2 text-lg placeholder:text-base'
              placeholder='Vehicle Capacity'
            />

            <select
              className='bg-[#eeeeee] rounded px-4 py-2 border-0 w-1/2 text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
              required
              >
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="truck">Truck</option>
                <option value="van">Van</option>
                <option value="bus">Bus</option>

              </select>
            </div>

          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Create Captain Account</button>
        </form>

        <p className="text-center">Already have an account? <Link to="/captain-login" className='text-blue-600'>Login Here</Link></p>
      </div>
      <div>
        <p className="text-xs text-center leading-tight">This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service</span> apply.</p>
      </div>
    </div>
  )
}

export default CaptainSignup