/* eslint-disable react/prop-types */
const LookingForDriver = (props) => {
    return (
        <div>
            <h5 onClick={() => {
                props.setVehicleFound(false);
            }} className="p-1 w-[94%] text-center absolute top-0"><i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i></h5>



            <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>



            <div className="flex gap-2 flex-col justify-between items-center">
                <img className="h-20" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="Vehicle Image" />

                <div className="w-full mt-5">
                    <div className="flex items-center gap-5 p-3">
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11-A</h3>
                            <p className="text-sm text-gray-600">Kankariya Talab, Bhopal</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-t-2 border-gray-400">
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11-A</h3>
                            <p className="text-sm text-gray-600">Kankariya Talab, Bhopal</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-t-2 border-gray-400">
                        <i className="text-lg ri-money-rupee-circle-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">₹192.20</h3>
                            <p className="text-sm text-gray-600">Cash Cash</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LookingForDriver