import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
      <Card title="Card 1" desc="This is about Card 1" /> {/* Using props */}
      <Card title="Card 2" desc="This is about Card 2" />
      <Card title="Card 3" desc="This is about Card 3" />
        <Card />
      </div>
      <Footer />
    </>
  )
}

export default App
