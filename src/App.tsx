import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'

function App() {
  const islogin = true
  return (
    <div className="App">
      <Navbar />
      <Greeting name="F" age={30} isLoggedIn={islogin} />
      <Greeting name="A" age={25} isLoggedIn={islogin} />
      <Greeting name="B" age={27} isLoggedIn={islogin} />
    </div>
  )
}

export default App
