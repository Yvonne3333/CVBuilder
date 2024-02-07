
import { Route, Routes } from "react-router-dom";
import JoinUsPage from "./pages/JoinUsPage"
import Home from "./pages/Home";
import Help from "./pages/Help";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Joinus" element={<JoinUsPage />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
