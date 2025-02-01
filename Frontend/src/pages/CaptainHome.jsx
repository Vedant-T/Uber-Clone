import { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import CaptainDetails from "../components/CaptainDetails"
import RidePopUp from "../components/RidePopUp"
import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ConfirmRidePopUp from "../components/ConfirmRidePopUp"
import { SocketDataContext } from "../context/SocketContext"
import { CaptainDataContext } from "../context/CaptainContext"
import axios from "axios"
import LiveTracking from "../components/LiveTracking"

const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(false)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const [ride, setRide] = useState(null)

  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)

  const { socket } = useContext(SocketDataContext);
  const { captain } = useContext(CaptainDataContext);

  useEffect(() => {
    socket.emit("join", { userType: "captain", userId: captain._id })

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          socket.emit('update-location-captain', { userId: captain._id, location: { ltd: position.coords.latitude, lng: position.coords.longitude } })
        })
      }
    }

    const locationInterval = setInterval(updateLocation, 10000)

    updateLocation()
  })

  socket.on('new-ride', (data) => {
    setRide(data);
    setRidePopupPanel(true);
  })

  async function confirmRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {
      rideId: ride._id,
      captainId: captain._id,
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  useGSAP(function () {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(0px)"
      })
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [ridePopupPanel])

  useGSAP(function () {
    if (confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: "translateY(0px)"
      })
    } else {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [confirmRidePopupPanel])


  return (
    <div className="h-screen">
      <div className="fixed p-4 top-0 flex items-center justify-between w-screen">
        <img className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
          alt="Uber Logo" />
        <Link to="/home" className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-3/5">
        <LiveTracking />
      </div>

      <div className="p-8 h-2/5">
        <CaptainDetails />
      </div>

      <div ref={ridePopupPanelRef} className="w-full bg-white fixed translate-y-full z-10 bottom-0 px-3 py-6 pt-12">
        <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} ride={ride} confirmRide={confirmRide} />
      </div>

      <div ref={confirmRidePopupPanelRef} className="w-full h-screen bg-white fixed translate-y-full z-10 bottom-0 px-3 py-6 pt-12">
        <ConfirmRidePopUp ride={ride} setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>
    </div>
  )
}

export default CaptainHome