import imgSubject from '../../assets/cards/1.png'
import starIcon from '../../assets/star-icon.png'
import './card.css'

export default function Card() {
    return (
        <div id="card">
            <img src={imgSubject} />
            <div>
                <img src={starIcon} />
                <span>5.0</span>
                <span className='gray'>(6)</span>
                <span className='gray'>•</span>
                <span className='gray'>USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <span><b>From $136</b> / person</span>
        </div>
    )
}