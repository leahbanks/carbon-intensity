import { CO2Data } from "./components/CO2Data";
import "./App.css";
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
      <h1>PostCodeCarbon</h1>
      <CO2Data />
    </div>
  );
}

export default App;
