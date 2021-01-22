import React, { useState } from 'react';
import CardsData from '../../data/CardsData';

import styles from '../Cards/Cards.module.scss';
import Card from './Card/Card'

/**
 * Cards container
 * 
 * Manages a selected card state
 */
const Cards = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [activeCard, setActiveCard] = useState(null);

    const cards = CardsData.map((card, index) => {
        return <Card
            selectedCard={selectedCardIndex === index ? true : false}
            details={card}
            key={index}
            cardActionHandler={() => setSelectedCardIndex(index)}
            activeCardHandler= {() => setActiveCard(card)}
            activeCard = {activeCard}
        />;
    });

    return (
        <div className={styles.CardsContainer}>
            {cards}
        </div>
    )
};

export default Cards;