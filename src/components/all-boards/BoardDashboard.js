import React from "react";
import { useState } from "react";
import BoardComponent from "./BoardComponent";
import Board from "../board/Board";

const BoardDashboard = ({boards}) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-5 p-5 h-screen">
        {boards.map((b) => <BoardComponent link={b.link} boardName={b.name} />)}
      </div>
    </>
  );
};

export default BoardDashboard;