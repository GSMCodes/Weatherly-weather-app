import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLoc from "./components/TimeAndLoc"
import TempAndDeets from "./components/TempAndDeets";
import Forecast from "./components/Forecast";
import getFormattedData from "./services/WeatherServices";
import { useState, useEffect,} from "react";

const App = () => {

  const [query, setquery] = useState({q: 'london'})
  const [units, setunits] = useState('metric')
  const [weather, setweather] = useState(null)

  const getWeather = async() => {
    await getFormattedData({...query, units}).then(data => {
      setweather(data)
    })
    console.log(data)
  }

  useEffect(() => {getWeather();}, [query,units]);

  const formatBackground = () => {
    if(!weather) return "from-blue-700 to-blue-500";
    const threshold = units === "metric" ? 20:60
    if(weather.temp <= threshold) return "from-blue-700 to-blue-500";
    return "from-red-600 to-orange-400";
  }


  return (
    <div className={`mx-auto max-w-screen-lg max-h-screen mt-2 py-2 px-32 bg-gradient-to-br shadow-xl shadow-gray-500 ${formatBackground()} rounded-lg`}>
      <TopButtons setquery= {setquery}/>
      <Inputs setquery={setquery} setunits={setunits} />

    {weather && (
      <>
        <TimeAndLoc weather={weather}/>
        <TempAndDeets weather={weather} units={units} />
        <Forecast title='3 hour step forecast' data={weather.hourly}/>
        <Forecast title =  'daily forecast' data={weather.daily}/>
      </>
    )}
    </div>
  );
};

export default App