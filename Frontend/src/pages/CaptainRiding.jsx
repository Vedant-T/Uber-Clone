import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import FinishRide from "../components/FinishRide"
import LiveTracking from "../components/LiveTracking"

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false);

    const finishRidePanelRef = useRef(null);

    const location = useLocation();
    const rideData = location.state?.ride

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: "translateY(0px)"
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: "translateY(100%)"
            })
        }
    }, [finishRidePanel])

    return (
        <div className="h-screen">
            <div className="fixed p-4 top-0 flex items-center justify-between w-screen">
                <img className="w-16"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
                    alt="Uber Logo" />
                <Link to="/captain-home" className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>

            <div className="h-4/5">
                <LiveTracking />
            </div>

            <div className="p-8 h-1/5 bg-yellow-200 flex items-center justify-between relative" onClick={()=>{
                setFinishRidePanel(true);
            }}>
                <h5 onClick={() => {

                }} className="p-1 w-[85%] text-center absolute top-0 rotate-180"><i className="ri-arrow-down-wide-line text-3xl text-black"></i></h5>
                <h4 className="text-xl font-semibold">4 KM away</h4>
                <button className="flex justify-center items-center bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">Complete Ride</button>
            </div>

            <div ref={finishRidePanelRef} className="w-full bg-white fixed translate-y-full z-10 bottom-0 px-3 py-6 pt-12">
                <FinishRide rideData={rideData} setFinishRidePanel={setFinishRidePanel} />
            </div>
        </div>
    )
}

export default CaptainRiding