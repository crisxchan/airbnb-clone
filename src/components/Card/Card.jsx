import starIcon from '../../assets/star-icon.png'
import './card.css'

export default function Card(props) {
    let badgeText = props.openSpots === 0 ? 'SOLD OUT' : props.location === 'Online' ? 'ONLINE' : null;
    return (
        <div id="card">
            {badgeText && <div id='badge'>{badgeText}</div>}
            <img src={`assets/${props.coverImg}`} />
            <div id='info'>
                <img src={starIcon} />
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount})</span>
                <span className='gray'>•</span>
                <span className='gray'>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <span><b>From ${props.price}</b> / person</span>
        </div>
    )
}