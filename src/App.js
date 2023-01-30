import "./styles.css";

var text = "piyush";
var color = "blue";
export default function App() {
  return (
    <div className="App">
      <h1>
        welcome <span style={{ color: "blue" }}>{text}</span>
      </h1>
    </div>
  );
}

/**
 * things to notice
 * class-> className
 * style->taken as object
 */
