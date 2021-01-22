import lakeImage from '../assets/images/lake-inniscarra-trainer.jpg';
import lakeThumb from '../assets/images/lake-inniscarra-thumb.jpg'
import performaceImage from '../assets/images/performance-series-trainer.jpg';
import performaceThumb from '../assets/images/performance-series-thumb.jpg';
import pullsImage from '../assets/images/slow-pulls-trainer.jpg';
import pullsThumb from '../assets/images/slow-pulls-thumb.jpg';
import tonedImage from '../assets/images/20-minutes-to-toned-trainer.jpg';
import tonedThumb from '../assets/images/20-minutes-to-toned-thumb.jpg';
import charlesImage from '../assets/images/charles-race-trainer.jpg';
import charlesThumb from '../assets/images/charles-race-thumb.jpg';
import fullBodyImage from '../assets/images/full-body-hiit-trainer.jpg';
import fullBodyThumb from '../assets/images/full-body-hiit-thumb.jpg';
import kafueImage from '../assets/images/kafue-river-trainer.jpg';
import kafueThumb from '../assets/images/kafue-river-thumb.jpg';
import shredImage from '../assets/images/shred-and-burn-trainer.jpg';
import shredThumb from '../assets/images/shred-and-burn-thumb.jpg';

const CardsData = [
    {
        title: 'Lake Inniscarra, Ireland—Pyramid',
        series: false,
        time: '30:53',
        distance: '6,248',
        image: lakeImage,
        thumb: lakeThumb,
    },
    {
        title: 'Performance Series',
        series: true,
        workouts: 9,
        image: performaceImage,
        thumb: performaceThumb,
    },
    {
        title: 'Slow Pulls and Fast Intervals',
        series: false,
        time: '44:13',
        distance: '9,948',
        image: pullsImage,
        thumb: pullsThumb,
    },
    {
        title: '20 Minutes to Toned',
        series: true,
        workouts: 12,
        image: tonedImage,
        thumb: tonedThumb,
    },
    {
        title: 'Charles Race, Boston, Massachusetts',
        series: false,
        time: '36:22',
        distance: '8,648',
        image: charlesImage,
        thumb: charlesThumb,
    },
    {
        title: 'Full-Body HIIT Series',
        series: true,
        workouts: 12,
        image: fullBodyImage,
        thumb: fullBodyThumb,
    },
    {
        title: 'Kafue River, Zambia—Power Stroke Pyramid',
        series: false,
        time: '22:22',
        distance: '4,660',
        image: kafueImage,
        thumb: kafueThumb,
    },
    {
        title: 'Shred & Burn Series',
        series: true,
        workouts: 16,
        image: shredImage,
        thumb: shredThumb,
    },
];

export default CardsData;