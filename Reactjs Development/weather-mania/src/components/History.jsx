import WeatherDetailCard from "./WeatherDetailCard"

export default function History(props) {
  return (
    <div className="mx-3">
        <h2 className="text-3xl font-bold my-2">History</h2>
        <div className="grid grid-cols-1 space-y-4 md:grid-cols-3 md:space-x-5"></div>
        {props.history.map((locatin) => {return <WeatherDetailCard />})}
    </div>
  )
}
