import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css";

import {useState} from "react";
export default function SearchBox({updateInfo}){
   
    let[city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="99b904a5cd4076b563c1b187a72ec5a1";
    let getWeatherInfo = async ()=>{
      try{
     let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse=await response.json();
      console.log(jsonResponse);
      let result ={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,

      };
      console.log(result);
      return result;
    }
    catch(err){
      throw err;
      
    }
    };
    let handleChange =(event)=>{
      setCity(event.target.value);
      
      
    }
    let handleSubmit=async (event)=>{
     try{  event.preventDefault();
       console.log(city);
       setCity("");
       setError(false);
   let newinfo =   await getWeatherInfo();
   updateInfo(newinfo);
     }catch(err){
      setError(true);
     }

    }
    return(
        <div className="searchbox">
             
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="city Name" variant="outlined" required value={city}onChange={handleChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">
        Search
      </Button>
      {error && <p>No such place exists!</p>}
            </form>
          
        </div>
    )
}