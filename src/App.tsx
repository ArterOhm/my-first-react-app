import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
