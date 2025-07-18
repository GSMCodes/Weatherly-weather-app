import React from "react"

const Forecast = ({title, data}) => {
  return (
    <div>
        <div className="flex items-center justify-start mt-2">
            <p className="font-bold text-lg uppercase">{title}</p>
        </div>
        <hr className="my-1"/>
        <div className="flex items-center justify-between">
            {
                data.map((d,index) => (
                    <div key={index} className="flex flex-col items-center justify-center pb-1">
                        <p className="font-medium text-md mt-2">{d.title}</p>
                        <img src={d.icon} alt="wheather icon" className="w-20" />
                        <p className="font-semibold">{`${d.temp.toFixed()}°`}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Forecast