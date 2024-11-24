import { IoIosAddCircle, IoIosCloseCircleOutline } from "react-icons/io";
import Card from "../card/Card";
import "./Board.css"
import { useState } from "react";
import Modal from 'react-modal';
import Content from "../content/Content";
import { Link } from "react-router-dom";

const Board = () => {
    const [cards, setCards] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState();

    const displayCard = (card) => {
        return(
            <div
                className="card-display"
                onClick={() => {
                    setModalOpen(true);
                    setSelectedCard(card);
                }}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <p>Card name here</p>
            </div>)
    };

    const addCard = () => {
        setCards([...cards,
            <Card
                pages={[
                    <Content className="front-content" />,
                    <Content className="back-content" />,
                    <Content className="front-content" />,
                    <Content className="back-content" />
                ]}
            />
        ]);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    }

    return (
        <div className="board">
            <Link to="/boards">
                <button className="back-button">Back to all boards</button>
            </Link>
            {cards.map(card => displayCard(card))}
            <button className="add-card-btn" onClick={addCard}>
                <IoIosAddCircle size={40} color="#D60200"/>
            </button>
            <Modal
                isOpen={modalOpen}
                style={{
                    overlay: {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    content: {
                        display: 'flex',
                        background: 'none',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        outline: 'none',
                        border: 'none',
                        padding: 0
                    }
                }}
            >
                {selectedCard}
                <button
                    onClick={handleModalClose}
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0
                    }}
                >
                    <IoIosCloseCircleOutline size={28} color="#ffffff"/>
                </button>
            </Modal> 
        </div>  
    );
}

export default Board;