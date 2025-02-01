import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { SocketDataContext } from "../context/SocketContext";
import { useNavigate } from "react-router-dom";
import LiveTracking from "../components/LiveTracking";

const Riding = () => {
  const location = useLocation()
  const { ride } = location.state || {};
  const { socket } = useContext(SocketDataContext);
  const navigate = useNavigate();

  socket.on('ride-ended', () => {
    navigate('/home')
  })

  return (
    <div className="h-screen">
      <Link to="/home" className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className="text-lg font-medium ri-home-4-fill"></i>
      </Link>

      <div className="h-1/2">
        <LiveTracking />
      </div>

      <div className="flex flex-col justify-center p-4 h-1/2">

        <div className="flex items-center justify-between">
          <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="Vehicle Image" />

          <div className="text-right">
            <h2 className="text-lg font-medium">{ride?.captain.fullname.firstname}</h2>
            <h4 className="text-xl font-semibold">{ride?.captain.vehicle.plate}</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>

        </div>

        <div className="flex gap-2 flex-col justify-between items-center">
          <div className="w-full mt-5">

            <div className="flex items-center gap-5 p-3 border-t-2 border-gray-400">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm text-gray-600">{ride?.pickup}</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-3 border-t-2 border-gray-400">
              <i className="text-lg ri-money-rupee-circle-fill"></i>
              <div>
                <h3 className="text-lg font-medium">₹{ride?.fare}</h3>
                <p className="text-sm text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Make a Payment</button>
      </div>
    </div>
  )
}

export default Riding