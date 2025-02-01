/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState('')
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: { otp: otp, rideId: props.ride._id },

            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        );

        if (response.status === 200) {
            props.setConfirmRidePopupPanel(false);
            props.setRidePopupPanel(true)
            navigate('/captain-riding', {state: {ride: props.ride}})
        }

    }

    return (
        <div>
            <h5 onClick={() => {
                props.setConfirmRidePopupPanel(false);
            }} className="p-1 w-[94%] text-center absolute top-0"><i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i></h5>



            <h3 className="text-2xl font-semibold mb-5">Confirm this ride to Start</h3>


            <div className="flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg">
                <div className="flex items-center gap-3">
                    <img className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="User Image" />

                    <h2 className="text-lg font-medium capitalize">{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
                </div>

                <h5 className="text-lg font-semibold">2.2 KM</h5>
            </div>



            <div className="flex gap-2 flex-col justify-between items-center">
                <div className="w-full mt-5">
                    <div className="flex items-center gap-5 p-3">
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11-A</h3>
                            <p className="text-sm text-gray-600">{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-t-2 border-gray-400">
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11-A</h3>
                            <p className="text-sm text-gray-600">{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-t-2 border-gray-400">
                        <i className="text-lg ri-money-rupee-circle-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
                            <p className="text-sm text-gray-600">Cash Cash</p>
                        </div>
                    </div>
                </div>


                <div className="mt-6 w-full">
                    <form onSubmit={(e) => {
                        submitHandler(e);
                    }}>
                        <input
                            value={otp}
                            onChange={(e) => {
                                setOtp(e.target.value);
                            }}
                            className="bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-5" type="text" placeholder="Enter OTP" />

                        <button type="submit" className="text-lg w-full mt-5 flex justify-center items-center bg-green-600 text-white font-semibold p-3 rounded-lg">
                            Confirm
                        </button>

                        <button onClick={() => {
                            props.setRidePopupPanel(false);
                            props.setConfirmRidePopupPanel(false);
                        }} className="text-lg w-full mt-1 bg-red-500 text-white font-semibold p-3 rounded-lg">
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopUp