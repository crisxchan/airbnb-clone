// import imgSubject from '../../assets/cards/1.png'
import starIcon from '../../assets/star-icon.png'
import './card.css'

export default function Card(props) {
    return (
        <div id="card">
            {props.openSpots === 0 && <div id='badge'>SOLD OUT</div>}
            <img src={`assets/${props.img}`} />
            <div id='info'>
                <img src={starIcon} />
                <span>{props.rating}</span>
                <span className='gray'>({props.reviewCount})</span>
                <span className='gray'>•</span>
                <span className='gray'>{props.country}</span>
            </div>
            <p>{props.caption}</p>
            <span><b>From ${props.price}</b> / person</span>
        </div>
    )
}