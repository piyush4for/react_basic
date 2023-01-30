import "./styles.css";

var text = "piyush";
var color = "blue";
var likeCounter = 0;

function likeClicked() {
  likeCounter++;
  console.log(likeCounter);
}

export default function App() {
  return (
    <div className="App">
      <h1>
        welcome <span style={{ color: "blue" }}>{text}</span>
      </h1>
      <button onClick={likeClicked}>Like {likeCounter}</button>
    </div>
  );
}

/**
 * things to notice
 * class-> className
 * style->taken as object
 */
