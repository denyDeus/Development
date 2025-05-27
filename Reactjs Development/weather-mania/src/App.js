import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import WeatherDetailCard from "./components/WeatherDetailCard";

function App() {
  return (
    <>
    
    <NavBar />
    <div className="flex flex-col items-center justify-center max-h-screen bg-base-200">
      <h1 className="text-4xl font-bold mb-8">Weather Mania</h1>
      <p className="text-lg mb-4">Get the latest weather updates for your location</p>
       <WeatherDetailCard />
    </div>

    <Footer />
    </>
  );
}

export default App;
