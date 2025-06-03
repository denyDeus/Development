import { useState } from "react";

 export default function NavBar(props) {

  const [searchTerm, setSearchTerm] = useState("")

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (searchTerm.length > 0) {
        props.setLocation(searchTerm);
      }
    }
  }

  function handleOnChange(e) {
    setSearchTerm(e.target.value);
  }
  return (
  <div className="navbar bg-base-200">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Weather Mania</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input
      value={searchTerm}
      onKeyDown={handleKeyDown}
      onChange={(e) => handleOnChange(e)}
      type="text"
      placeholder="Search for a city..."
      aria-label="Search for a city"
      className="input input-bordered w-24 md:w-auto"
      />
    </div>
  </div>
</div>
  )
}
