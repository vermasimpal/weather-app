import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./infobox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let COLD_URL = "https://media.istockphoto.com/id/2160564993/photo/car-driving-on-foggy-road-with-ferris-wheel-in-background.webp?s=1024x1024&w=is&k=20&c=1PpuGWhzztjDLM1D0JPtav5ANoSUduCEhwZkkimBoSU=";
    let HOT_URL = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?s=1024x1024&w=is&k=20&c=FaZwWyck7yOcZQGFIFUsChGv532Wh8eN9nrk5tMyCkg=";
    let RAIN_URL="https://media.istockphoto.com/id/105934727/photo/rain.webp?s=1024x1024&w=is&k=20&c=NyB7w-uFLH5DvfzVARNmAx9lofieWs5m4f7_pEm_ly0=";
    return(
    <div className="infobox">
    
    <div className="cardcontainer">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:< AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary"component={"span"}>
         <p>Temperature={info.temp}&deg;</p>
         <p>Humidity={info.humidity}</p>
         <p>MinTemp={info.tempMin}</p>
         <p>MaxTemp={info.tempMax}</p>
         <p>The weather can be described as <i>{info.weather}</i> and feels like={info.feelsLike}&deg;</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>
    )
}