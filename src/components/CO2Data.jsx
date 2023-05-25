import { useState } from "react";
import { FetchData } from "./FetchData";
import "../App.css";

export function CO2Data() {
  const [location, setLocation] = useState("");
  const [hasLocation, setHasLocation] = useState(false);

  return !hasLocation ? (
    <section>
      <form type="submit">
        <label htmlFor="search">
          Enter the first half of your postcode (e.g SW1A):{" "}
        </label>

        <input
          type="text"
          id="search"
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        ></input>
        <button
          onClick={(event) => {
            event.preventDefault();
            setHasLocation(true);
          }}
        >
          Submit
        </button>
      </form>
    </section>
  ) : (
    <section className="App">
      <FetchData location={location} />
    </section>
  );
}
