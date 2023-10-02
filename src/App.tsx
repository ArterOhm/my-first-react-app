import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting name="F" age={30} />
      <Greeting name="A" age={25} />
      <Greeting name="B" age={27} />
    </div>
  )
}

export default App
