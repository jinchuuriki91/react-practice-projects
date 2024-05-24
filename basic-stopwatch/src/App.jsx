import "./App.css";
import Display from "./components/Display";
import Controls from "./components/Controls";

function App() {
  return (
    <>
      <section className="stopwatch">
        <h1>Basic Stopwatch</h1>
        <Display />
        <Controls />
      </section>
    </>
  );
}

export default App;
