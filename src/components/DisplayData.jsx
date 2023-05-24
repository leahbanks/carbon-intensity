import { FuelRadar } from "./Radar";
import { useState, useEffect } from "react";

export function DisplayData({ carbonData }) {
  const [inputData, setInput] = useState("");
  let intensity = carbonData.data[0].data[0].intensity.index;
  let data = carbonData.data[0].data[0].generationmix;
  let location = carbonData.data[0].shortname;

  useEffect(() => {
    let formatted = data.map((key) => {
      return { fuel: key.fuel, [location]: key.perc };
    });
    setInput(formatted);
  }, [location, data]);

  return (
    <section
      style={{
        backgroundColor: "white",
        width: "100vw",
        height: "70vh",
        textAlign: "center",
      }}
    >
      <p>location: {carbonData.data[0].shortname}</p>
      <p>
        timeframe from: {carbonData.data[0].data[0].from} to{" "}
        {carbonData.data[0].data[0].to}
      </p>
      <p>carbon intensity: {intensity}</p>
      <h4>Type of fuel:</h4>
      <FuelRadar location={location} data={inputData} />
    </section>
  );
}
