import starIcon from '../../assets/star-icon.png'
import './card.css'

export default function Card(props) {
    let badgeText = props.openSpots === 0 ? 'SOLD OUT' : props.country === 'Online' ? 'ONLINE' : null;
    return (
        <div id="card">
            {badgeText && <div id='badge'>{badgeText}</div>}
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