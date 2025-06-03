import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import History from "./components/History";
import WeatherDetailCard from "./components/WeatherDetailCard";
import { useState } from "react";

function App() {

  const [location, setLocation] = useState("Dodoma");
  const [history, setHistory] = useState([]);

  function updateLocation(newLocation) {
    setHistory((previous) => {
      return[location, ...previous];
    });
    setLocation(newLocation);
  }

  console.log(history);


  return (
    <>
    
    <NavBar setLocation ={updateLocation}/>
    <div className="flex flex-col items-center justify-center max-h-screen bg-base-200">
      <h1 className="text-4xl font-bold mb-8">Weather Mania</h1>
      <p className="text-lg mb-4">Get the latest weather updates for your location</p>
       <WeatherDetailCard location={location} />
    </div>
    <History history={history}/>
    <Footer />
    </>
  );
}

export default App;
