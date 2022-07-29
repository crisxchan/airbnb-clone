import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Card from "./components/Card/Card"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card 
        img='1.png'
        rating={5.0}
        reviewCount={6}
        country='USA'
        caption='Life lessons with Katie Zaferes'
        price={136}
      />
    </>
  )
}

export default App
