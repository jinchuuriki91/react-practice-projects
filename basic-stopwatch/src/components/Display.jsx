import './Display.css'

function Display() {
  return (
    <>
      <section className="display">
        <div className="hours">
          <span className="number">00</span>
          <label>Hours</label>
        </div>
        <span>:</span>
        <div className="minutes">
          <span className="number">00</span>
          <label>Minutes</label>
        </div>
        <span>:</span>
        <div className="seconds">
          <span className="number">00</span>
          <label>Seconds</label>
        </div>
      </section>
    </>
  );
}

export default Display;
