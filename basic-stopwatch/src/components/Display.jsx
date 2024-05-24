import "./Display.css";

function Display({ time }) {
  function formatTime(timeInSecs) {
    const hours = String(Math.floor(timeInSecs / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((timeInSecs % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(timeInSecs % 60).padStart(2, "0");

    return {
      hours,
      minutes,
      seconds,
    };
  }
  return (
    <>
      <section className="display">
        <div className="hours">
          <span className="number">{formatTime(time).hours}</span>
          <label>Hours</label>
        </div>
        <span>:</span>
        <div className="minutes">
          <span className="number">{formatTime(time).minutes}</span>
          <label>Minutes</label>
        </div>
        <span>:</span>
        <div className="seconds">
          <span className="number">{formatTime(time).seconds}</span>
          <label>Seconds</label>
        </div>
      </section>
    </>
  );
}

export default Display;
