import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/card/Card";
import Menu from "./components/menu/Menu";
import Boards from "./components/all-boards/Boards";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Menu />} />
            <Route path="/card" element={<Card />} />
            <Route path="/boards" element={<Boards />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;