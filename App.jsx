import Login from "./pages/Login";
import UserInput from "./pages/UserInput";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/UserInput" element={<UserInput />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
