/* eslint-disable react/prop-types */
const LocationSearchPanel = ({
    suggestions,
    activeField,
    setPickup,
    setDestination
}) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion.description)
        } else if (activeField === 'destination') {
            setDestination(suggestion.description)
        }
    }

    return (
        <div className="pt-8">
            {
                suggestions.map((elem, index) => {
                    return <div onClick={() => {
                        handleSuggestionClick(elem)
                    }} key={index} className='flex items-center justify-start gap-4 my-4 border-2 border-gray-400 active:border-black p-3 rounded-xl'>
                        <h2 className='bg-[#eee] flex items-center justify-center h-10 w-13  rounded-full'><i className="ri-map-pin-line"></i></h2>
                        <h4 className='font-medium'>{elem.description}</h4>
                    </div>
                })
            }
        </div>
    )
}

export default LocationSearchPanel