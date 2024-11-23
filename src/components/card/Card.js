// default have the card have 2 pages
import Page from "../page/Page";
import "./Card.css"
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

const Card = ({isAnimated}) => {

    const pages = [<Page frontIndex={4} backIndex={3}/>, <Page frontIndex={2} backIndex={1}/>];
    // var z_index = 0;
    var curPage = 0;

    // function addCard() {
    //     pages.push(<Page frontIndex={z_index} backIndex={z_index-1} isAnimated={isAnimated}/>)
    //     z_index -= 2
    // }
    var cardTranslateX = "0%";
    var prevBtnTranslateX = "0%";
    var nextBtnTranslateX = "0%"

    function openBook() {
        console.log('opening')
        cardTranslateX = "50%";
        prevBtnTranslateX = "-180px";
        nextBtnTranslateX = "180px";
    }
    
    function closeBook(isAtBeginning) {
        console.log('closing')
        if(isAtBeginning) {
            cardTranslateX = "0%";
        } else {
            cardTranslateX = "100%";
        }
        prevBtnTranslateX = "0px";
        nextBtnTranslateX = "0px";
        // prevBtn.style.transform = "translateX(0px)";
        // nextBtn.style.transform = "translateX(0px)";
    }

    const flipForward = () => {
        console.log('flipping forward')
        if (curPage == 0) {
            openBook();
        } else if (curPage == pages.length-1) {
            closeBook(true);
        }
        curPage++;
    };

    const flipBackward = () => {
        curPage.flipPage();
        curPage--;
    };

    return (
        <div className="body">
            <button id="prev-btn" onClick={flipBackward} style={{translateX: {prevBtnTranslateX}}}>
                <HiArrowCircleLeft />
            </button>
            <div className="card" style={{translateX: {cardTranslateX}}}>
                {pages.map((page) => page)}
            </div>
            <button id="prev-btn" onClick={flipForward} style={{translateX: {nextBtnTranslateX}}}>
                <HiArrowCircleRight />
            </button>
        </div>
    );
}

export default Card;