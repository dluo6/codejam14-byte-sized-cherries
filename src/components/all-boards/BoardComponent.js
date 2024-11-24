import React from "react";
import { Link } from "react-router-dom";

const BoardComponent = ({ link, boardName }) => {
  return (
    <>
      <Link to={link}>
        <div
            className="rounded-sm h-2/6"
            style={{
                backgroundColor: "#EFC49B",
                border: "0.5rem solid #D8A87B",
                boxSizing: "border-box"
            }}
        >
            {boardName}
        </div>
      </Link>
    </>
  );
};

export default BoardComponent;