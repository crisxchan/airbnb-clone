import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Card from "./components/Card/Card"
import data from "./data"

function App() {
  const dataCards = data.map(item => {
    return <Card 
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
      caption={item.title}
      price={item.price}
      openSpots={item.openSpots}
    />
  })

  return (
    <>
      <Navbar />
      <Hero /> 
      <section id="cards-list">
        {dataCards}
      </section>
    </>
  )
}

export default App
