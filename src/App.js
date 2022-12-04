import Weather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="conatiner">
        <div className="appborder">
         <Weather defaultCity="Cleveland"/>
        
      </div>
      </div>
      <small>
      <a href="https://github.com/jureefitz/weather-react-app" target="_blank" rel="noreferrer">Open-source code</a>, by Juree Fitzgerald
    </small>
    </div>
  );
}

export default App;
