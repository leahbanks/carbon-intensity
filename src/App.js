import { CO2Data } from "./components/CO2Data";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>Carbon Calculator 🌳</h1>
      <Routes>
        {" "}
        <Route
          path="/"
          element={
            <CO2Data
            />
          }
        ></Route>
        </Routes>
    </div>
  );
}

export default App;
