import SearchBox from './searchbox.jsx';
import InfoBox from "./infoBox.jsx";
import {useState} from "react"
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        feelsLike:24.84,
        weather:"haze",
    });
    let updateInfo =(newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather app </h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info ={weatherInfo}/>
        </div>
    )
}