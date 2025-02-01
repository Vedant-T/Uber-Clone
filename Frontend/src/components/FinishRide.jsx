/* eslint-disable react/prop-types */
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FinishRide = (props) => {

    const navigate = useNavigate();

    async function endRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {
            rideId: props.rideData?._id
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        console.log(response.status)
        console.log("Executed")

        if (response.status === 200) {
            navigate('/captain-home')
        }
    }


    return (
        <div>
            <h5 onClick={() => {
                props.setFinishRidePanel(false);
            }} className="p-1 w-[94%] text-center absolute top-0"><i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i></h5>



            <h3 className="text-2xl font-semibold mb-5">Finish this ride</h3>


            <div className="flex items-center justify-between mt-4 p-4 bg-yellow-400 rounded-lg">
                <div className="flex items-center gap-3">
                    <img className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="User Image" />

                    <h2 className="text-lg font-medium">{props.rideData?.user.fullname.firstname + " " + props.rideData?.user.fullname.lastname}</h2>
                </div>

                <h5 className="text-lg font-semibold">2.2 KM</h5>
            </div>



            <div className="flex gap-2 flex-col justify-between items-center">
                <div className="w-full mt-5">
                    <div className="flex items-center gap-5 p-3">
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11-A</h3>
                            <p className="text-sm text-gray-600">{props.rideData?.pickup}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-t-2 border-gray-400">
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11-A</h3>
                            <p className="text-sm text-gray-600">{props.rideData?.destination}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-t-2 border-gray-400">
                        <i className="text-lg ri-money-rupee-circle-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">₹{props.rideData?.fare}</h3>
                            <p className="text-sm text-gray-600">Cash Cash</p>
                        </div>
                    </div>
                </div>


                <div className="mt-10 w-full">
                    <button onClick={endRide} className="w-full mt-5 flex justify-center items-center 
                    text-lg bg-green-600 text-white font-semibold p-3 rounded-lg">
                        Finish Ride
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FinishRide