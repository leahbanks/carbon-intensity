import { MyResponsiveRadar } from "./Radar";
import { useState, useEffect } from "react";
import { format } from "date-fns";

export function DisplayData({ carbonData }) {
  const [inputData, setInput] = useState("");
  const location = carbonData.data[0].shortname;
  const intensity = carbonData.data[0].data[0].intensity.index;
  const data = carbonData.data[0].data[0].generationmix;
  console.log(data);

  useEffect(() => {
    const formatted = data.map((key) => {
      return { fuel: key.fuel, [location]: key.perc };
    });
    setInput(formatted);
  }, [location, data]);

  const from = new Date(carbonData.data[0].data[0].from);
  const formattedFrom = format(from, "HH:MM");

  const to = new Date(carbonData.data[0].data[0].to);
  const formattedTo = format(to, "HH:MM 'on' E do LLL y");

  return (
    <section
      className="carbon-radar"
      style={{
        backgroundColor: "white",
        width: "100vw",
        height: "80vh",
        textAlign: "center",
      }}
    >
      <p>
        <b>Location:</b> {carbonData.data[0].shortname}
      </p>
      <p>
        <b>Carbon Intensity:</b>{" "}
        {intensity.slice(0, 1).toUpperCase() +
          intensity.slice(1, intensity.length)}{" "}
        {intensity === "low"
          ? "😊"
          : intensity === "high"
          ? "🙁"
          : intensity === "moderate"
          ? "😐"
          : intensity === "very low"
          ? "😃"
          : "😟"}
      </p>
      <p>
        <b>Time frame:</b> Between {formattedFrom} and {formattedTo}
      </p>
      <h4>Fuel Types</h4>
      <MyResponsiveRadar location={location} data={inputData} />
    </section>
  );
}
