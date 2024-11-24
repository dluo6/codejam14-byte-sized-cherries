import React from "react";
import BoardComponent from "./BoardComponent";
import { Link } from "react-router-dom";

const BoardDashboard = ({boards}) => {
  return (
    <>
      <Link to="/">
        <button className="back-button">Back to Menu</button>
      </Link>
      <div className="grid grid-cols-3 gap-5 p-5 h-screen">
        {boards.map((b) => <BoardComponent link={b.link} boardName={b.name} />)}
      </div>
    </>
  );
};

export default BoardDashboard;