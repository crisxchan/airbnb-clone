import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Card from "./components/Card/Card"
import data from "./data"

function App() {
  const dataCards = data.map(item => {
    return <Card 
      key={item.id}
      {...item}
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
