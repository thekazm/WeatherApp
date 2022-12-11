import React, {useState} from 'react'
import './App.css'

function App() {
 const apiKey = 'e84e83014265a5eae899745d03e52f6f'
 const [weatherData, setweatherData] = useState([{}])
 const [city, setCity] = useState("")
 const getWeather = (event) => {
  if (event.key == "Enter") {
    fetch(`https://api.openweathermap.org/data/2.5/weather?@=${city}&units=imperia&APPID=${apiKey}`).then(
      Response => Response.json()
    ).then(
      data => {
        setweatherData(data)
      }
    )
  }
 }
 return (
    <div className="container">
    <input
   className="input"
    placeholder="Enter City..."
     onChange={e => setCity(e.target.value)}
     value={city}
     onKeyPress={getWeather}
     />
    </div>
  )
}

export default App 