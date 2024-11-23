// default have the card have 2 pages
import "./Card.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useState } from "react";

const Card = ({ pages }) => {
  const [curPage, setCurPage] = useState(0);
  const [firstFlipped, setFirstFlipped] = useState(false);
  const [secondFlipped, setSecondFlipped] = useState(false);
  const [cardTransform, setCardTransform] = useState("translateX(0%");
  const [prevBtnTransform, setPrevBtnTransform] = useState("translateX(0%)");
  const [nextBtnTransform, setNextBtnTransform] = useState("translate(0%)");

  const front = () => (pages[0]);
  const insideLeft = () => (pages[1]);
  const insideRight = () => (pages[2]);
  const back = () => (pages[3]);

  const firstPage = () => {
    return (
      <div>
        {curPage != 2 && (
          <div id="p1" class={firstFlipped ? "flipped page" : "page"}>
            <div class="front">{front()}</div>
            <div class="back">{insideLeft()}</div>
          </div>
        )}
      </div>
    );
  };

  const secondPage = () => {
    return (
      <div>
        {curPage != 0 && (
          <div id="p2" class={secondFlipped ? "flipped page" : "page"}>
            <div class="front">{insideRight()}</div>
            <div class="back">{back()}</div>
          </div>
        )}
      </div>
    );
  };

  const openBook = () => {
    console.log("opening");
    setCardTransform("translateX(50%)");
    setPrevBtnTransform("translateX(-180px)");
    setNextBtnTransform("translateX(180px)");
    setFirstFlipped(true);
  };

  const closeBook = (isAtBeginning) => {
    console.log("closing");
    if (isAtBeginning) {
      setCardTransform("translateX(0%)");
    } else {
      setCardTransform("translateX(100%)");
      setSecondFlipped(false);
    }
    console.log("setting button transform");
    setPrevBtnTransform("translateX(0px)");
    setNextBtnTransform("translateX(0px)");
    // prevBtn.style.transform = "translateX(0px)";
    // nextBtn.style.transform = "translateX(0px)";
  };

  const flipForward = () => {
    console.log("flipping forward");
    if (curPage == 0) {
      openBook();
      setFirstFlipped(true);
    } else {
      closeBook(false);
      setSecondFlipped(true);
    }
    setCurPage(curPage + 1);
  };

  const flipBackward = () => {
    if (curPage == 1) {
      closeBook(true);
      setFirstFlipped(false);
    } else {
      openBook();
      setSecondFlipped(false);
    }
    setCurPage(curPage - 1);
  };

  const renderPage = () => {
    return (
      <div className="card" style={{ transform: cardTransform }}>
        {firstPage()}
        {secondPage()}
      </div>
    );
  };

  const renderNextButton = () => {
    return (
      <div>
        {curPage != 2 && (
          <button
            id="next-btn"
            onClick={flipForward}
            style={{ transform: nextBtnTransform }}
          >
            <HiArrowRight size={28} color="white" />
          </button>
        )}
      </div>
    );
  };

  const renderPrevButton = () => {
    return (
      <div>
        {curPage != 0 && (
          <button
            id="prev-btn"
            onClick={flipBackward}
            style={{ transform: prevBtnTransform }}
          >
            <HiArrowLeft size={28} color="white" />
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="body">
      {renderPrevButton()}
      {renderPage()}
      {renderNextButton()}
    </div>
  );
};

export default Card;
