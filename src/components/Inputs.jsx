import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { TfiLocationPin } from "react-icons/tfi";

const Inputs = ({setquery, setunits}) => {
  const [City, setCity] = useState('')

  const handleSearchClick = () =>{
    if(City !=="") setquery({q:City});
  }

  const handleLocationClick = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords
        setquery({lat: latitude, lon: longitude})
      })
    }
  }

  return (
    <div className="w-full flex flex-row justify-center my-4 ">
        <div className="w-3/4 flex flex-row items-center space-x-4">
            <input value={City} onChange={(e) => setCity(e.currentTarget.value)} type="text" placeholder="Search by city..." className="w-full py-2 px-1  text-lg text-gray-600 bg-slate-50 rounded-md shadow capitalize focus:outline-none placeholder:lowercase" />
            <GoSearch size={30} className="cursor-pointer transition ease-out hover:scale-125" onClick={handleSearchClick}/>
            <TfiLocationPin size={30} className="cursor-pointer transition ease-out hover:scale-125" onClick={handleLocationClick} />
        </div>
        <div className="flex flex-row justify-end items-center space-x-2 w-1/4 cursor-pointer">
            <button className="hover:scale-125 transition ease-out text-xl" onClick={() => setunits('metric')}>°C</button>
            <p className=" text-2xl font-medium">|</p>
            <button className="hover:scale-125 transition ease-out text-xl" onClick={() => setunits('imperial')}>°F</button>
        </div>
    </div>
  )
}

export default Inputs