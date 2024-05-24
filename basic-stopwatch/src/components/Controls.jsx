import "./Controls.css";

function Controls({ startStop, isRunning, setTime }) {
  return (
    <>
      <section className="controls">
        <button className="reset" onClick={() => setTime(0)}>
          Reset
        </button>
        <button
          className={`start-stop ${isRunning ? "red" : ""}`}
          onClick={startStop}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
      </section>
    </>
  );
}

export default Controls;
