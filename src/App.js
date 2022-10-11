import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Phuc";
  const age = 18;
  const isFemale = false;
  const student = {
    name: "Easy Frontend",
  };
  const colorList = ["red", "green", "blue"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Xin chao {name} - {age}
        </p>
        <p>
          <i>Gioi tinh:</i> {isFemale ? <span>Female</span> : <span>Male</span>}
        </p>

        <ul>
          {colorList.map((color) => (
            <li style={{ color }}>{color}</li>
          ))}
        </ul>

        <p>{student.name}</p>
      </header>
    </div>
  );
}

export default App;
