import { useState } from "react";
import { GetData } from "./GetData";
import "../App.css";

export function CO2Data() {
  const [location, setLocation] = useState("");
  const [hasLocation, setHasLocation] = useState(false);
  if (!hasLocation) {
    return (
      <section>
        <form type="submit">
          <label htmlFor="search">
            Outward Postcode (first 2-3 characters of postcode (M1)):{" "}
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
    );
  } else {
    return (
      <section className="App">
        <GetData location={location} />
      </section>
    );
  }
}
