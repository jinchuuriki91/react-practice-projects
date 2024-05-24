import "./App.css";
import Display from "./components/Display";
import Controls from "./components/Controls";
import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function handleStartStop() {
    setIsRunning(!isRunning);
  }

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    }

    return () => {
      console.log("clean up function");
      clearInterval(interval);
    };
  }, [time, isRunning]);

  return (
    <>
      <section className="stopwatch">
        <h1>Basic Stopwatch</h1>
        <Display time={time} />
        <Controls
          startStop={handleStartStop}
          isRunning={isRunning}
          setTime={setTime}
        />
      </section>
    </>
  );
}

export default App;
