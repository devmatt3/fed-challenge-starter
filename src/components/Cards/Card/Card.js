import React, { useState } from 'react';
import timerImg from '../../../assets/images/timer.svg';
import distanceImg from '../../../assets/images/distance.svg';
import playlistIcon from '../../../assets/images/playlist.svg';
import styles from './Card.module.scss';

/**
 * Card object
 * @param {selectedCard, details, cardActionHandler} props 
 */
const Card = (props) => {
    const [viewDetails, setViewDetails] = useState(false);
    let cardDetails;
    let cardSeriesContent;

    if (!props.details.series) {
        cardDetails = (
            <div className={styles.CardDetailsWrap}>
                <div className={styles.CardTimeWrap}>
                    <img src={timerImg} alt="Timer" />
                    <h4>{props.details.time}</h4>
                </div>
                <div className={styles.CardDistanceWrap}>
                    <img src={distanceImg} alt="Distance" />
                    <h4>{props.details.distance} M</h4>
                </div>
            </div>
        );
    } else {
        cardSeriesContent = (
            <div className={styles.CardImageOverlay}>
                <div className={styles.CardOverlayWrap}>
                    <h1>{props.details.workouts}</h1>
                    <h4 className={styles.OverlayWorkoutCopy}>Workouts</h4>
                    <img src={playlistIcon} alt="Playlist" />
                </div>
            </div>
        );
    }
    return (
        <div className={[styles.CardContainer, props.selectedCard ? styles.SelectedCard : ''].join(' ')}
            onClick={() => {props.cardActionHandler(); props.activeCardHandler();}}
            onMouseEnter={() => setViewDetails(true)}
            onMouseLeave={() => setViewDetails(false)}>
            <div className={styles.ImageContainer}>
                {cardSeriesContent}
                <img className={styles.CardImage} src={props.details.image} alt={props.details.title} />
            </div>
            <div className={styles.CardContentWrap}>
                <div className={styles.CardIntroWrap}>
                    <h2>{props.details.title}</h2>
                    <img className={styles.CardThumb} src={props.details.thumb} alt={props.details.title} />
                </div>
                {cardDetails}
                {viewDetails || props.activeCard === props.details ? <h3 className={styles.CardViewCopy}>View Details</h3> : null}
            </div>
        </div>
    );
}

export default Card;