import "./styles.css";

var text = "hi piyush";
var color = "green";
export default function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{text}</h1>
    </div>
  );
}
