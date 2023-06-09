import './styles/App.css';
import './styles/navbar.css'
import Home from './pages/Home.js'
import Services from './pages/Services.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.js'


function App() {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>   
    </> 
  );
}


export default App;