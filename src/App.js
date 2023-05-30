import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/company' element={<Company />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
    
  )
}

export default App;