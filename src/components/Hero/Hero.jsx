import groupedImgs from '../../assets/hero-grouped.png'
import './hero.css'

export default function Hero() {
    return (
        <section id='hero'>
            <img src={groupedImgs} />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}