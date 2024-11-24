import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/card/Card";
import Menu from "./components/menu/Menu";
import BoardDashboard from "./components/all-boards/BoardDashboard";
import Board from "./components/board/Board";

function App() {

  const boards = [
    {
        board: <Board />,
        name: "Board 1",
        link: "board1"
    }, 
    {
        board: <Board />,
        name: "Board 2",
        link: "board2"
    },  
    {
        board: <Board />,
        name: "Board 3",
        link: "board3"
    }
  ];

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Menu />} />
            <Route path="/card" element={<Card />} />
            <Route path="/boards" element={<BoardDashboard boards={boards}/>} />
            {boards.map((b) => <Route path={"/boards/"+b.link} element={b.board}/>)}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;