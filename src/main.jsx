import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';
import './index.css'
import "./server"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);