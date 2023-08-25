import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/home';
import About from './pages/about';
import Vans from './pages/vans/vans'
import VanDetail from './pages/vans/vanDetail';
import Layout from './components/layout';
import Dashboard from './pages/host/dashboard';
import Income from './pages/host/income';
import Reviews from './pages/host/reviews';
import './index.css'
import "./server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/host" element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);