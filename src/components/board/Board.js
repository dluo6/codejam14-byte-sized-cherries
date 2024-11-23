import { IoIosAddCircle, IoIosCloseCircleOutline } from "react-icons/io";
import Card from "../card/Card";
import "./Board.css"
import { useState } from "react";
import Modal from 'react-modal';

const Board = () => {
    const [cards, setCards] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState()

    const displayCard = (card) => {
        return(
            <div
                className="card_display"
                onClick={() => {
                    setModalOpen(true)
                    setSelectedCard(card);
                }}>
            Card name here
        </div>)
    };

    const addCard = () => {
        setCards([...cards, <Card />]);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    }

    return (
        <div className="board">
            {cards.map(card => displayCard(card))}
            <button className="add_card_btn" onClick={addCard}>
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
                        minHeight: '90vh',
                        background: 'none',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        outline: 'none',
                        border: 'none',
                        padding: '2em'
                    }
                }}
            >
                {selectedCard}
                <button
                    onClick={handleModalClose}
                    style={{
                        alignSelf: "start"
                    }}
                >
                    <IoIosCloseCircleOutline size={28} color="#ffffff"/>
                </button>
            </Modal>
        </div>    
    );
}

export default Board;