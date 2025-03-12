import { FaTemperatureHalf } from "react-icons/fa6";
import { BiSolidDropletHalf } from "react-icons/bi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { RiArrowDownWideLine, RiArrowUpWideFill } from "react-icons/ri";
import { BsWind } from "react-icons/bs";

const TempAndDeets = ({weather: {details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like,},units,}) => {

    const verticalDeets = [
        {
            id:1,
            Icon: FaTemperatureHalf,
            title:"Real Feel",
            value:`${feels_like.toFixed()}°`
        },
        {
            id:2,
            Icon: BiSolidDropletHalf,
            title:"Humidity",
            value:`${humidity.toFixed()}%`
        },
        {
            id:3,
            Icon: BsWind,
            title:"Wind",
            value:`${speed.toFixed()} ${units==='metric'? 'kmph' : 'mps'}`
        },
    ];

    const horizontalDeets = [
        {
            id:1,
            Icon: GiSunrise,
            title:"Sunrise",
            value:sunrise
        },
        {
            id:2,
            Icon: GiSunset,
            title:"Sunset",
            value:sunset
        },
        {
            id:3,
            Icon: RiArrowUpWideFill,
            title:"High",
            value:`${temp_max.toFixed()}°`
        },
        {
            id:4,
            Icon: RiArrowDownWideLine,
            title:"Low",
            value:`${temp_min.toFixed()}°`
        },
    ];

  return (
    <div>
        <div className="flex items-center justify-center py-4 text-xl text-cyan-200">
            <p>{details}</p>
        </div>

        <div className="flex flex-row items-center justify-between py-3">
            <img src={icon} alt="icon weather" 
            className="w-20" />
            <p className="text-5xl leading-snug tracking-tight">{`${temp.toFixed()}°`}</p>

            <div className="flex flex-col space-y-3 items-start">

                {
                    verticalDeets.map(({id,Icon,title,value}) => (
                        <div key={id} className="flex font-light text-sm items-center justify-center">
                    <Icon size={15} className="mr-2"/>
                    {`${title}:`} <span  className="font-semibold ml-1">{value}</span>
                    </div>
                    ))
                }
            </div>
        </div>

            <div className="flex flex-row items-center justify-center space-x-10 text-sm my-3">
                {
                    horizontalDeets.map(({id, Icon, title, value}) =>(
                        <div key={id} className="flex flex-row items-center">
                            <Icon size={25}/>
                            <p className="font-light ml-1">{`${title}:`} <span  className="font-semibold ml-1">{value}</span></p>
                        </div>
                    ))
                }

            </div>

    </div>
  )
}

export default TempAndDeets