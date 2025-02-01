/* eslint-disable react/prop-types */
const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={() => {
          props.setVehiclePanel(false);
          props.setPanelOpen(true);
        }} className="p-1 w-[94%] text-center absolute top-0"><i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i></h5>

        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

        <div onClick={()=>{
          props.setConfirmRidePanel(true)
          props.setVehiclePanel(false)
          props.setVehicleType('car')
        }} className="flex border-2 mb-2 border-gray-400 active:border-black rounded-xl w-full items-center p-3  justify-between">
          <img
            className="h-18"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
            alt="Car Image"
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              UberGo
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹{props.fare.car}</h2>
        </div>

        <div onClick={()=>{
          props.setConfirmRidePanel(true)
          props.setVehiclePanel(false)
          props.setVehicleType('moto')
        }} className="flex border-2 mb-2 border-gray-400 active:border-black rounded-xl w-full items-center p-3  justify-between">
          <img
            className="h-18"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Moto
              <span>
                <i className="ri-user-3-fill"></i>1
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable motorcycle rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹{props.fare.moto}</h2>
        </div>

        <div onClick={()=>{
          props.setConfirmRidePanel(true)
          props.setVehiclePanel(false)
          props.setVehicleType('auto')
        }} className="flex border-2 mb-2 border-gray-400 active:border-black rounded-xl w-full items-center p-3  justify-between">
          <img
            className="h-18"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              UberAuto
              <span>
                <i className="ri-user-3-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable auto rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹{props.fare.auto}</h2>
        </div>
    </div>
  )
}

export default VehiclePanel