import "./App.css";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import ChangeColor from "./components/ChangeColor.jsx";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
