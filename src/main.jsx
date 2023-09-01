import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home';
import About from './pages/about';
import Vans from './pages/vans/vans'
import VanDetail from './pages/vans/vanDetail';
import Layout from './components/layout';
import Dashboard from './pages/host/dashboard';
import Income from './pages/host/income';
import Reviews from './pages/host/reviews';
import HostLayout from './components/hostlayout';
import HostVan from './pages/host/hostvans';
import HostVanDetail from './pages/host/hostvansdetail';
import HostVanPricing from './pages/host/hostvanspricing'; 
import HostVanPhotos from './pages/host/hostvansphotos'; 
import HostVanInfo from './pages/host/hostvaninfo';
import './index.css'
import "./server"

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index="host" element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVan />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);