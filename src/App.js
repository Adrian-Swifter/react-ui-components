import "./styles.css";
import Accordion from "./components/accordion/Accordion";
import Card from "./components/card/Card";
import Fetch from "./components/Fetch"

export default function App() {
  return (
    <div className="App">
      <h1>React UI Components</h1>
      <Accordion />
      <Card />
      <Fetch />
    </div>
  );
}
