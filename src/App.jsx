import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DivisionsPage from './pages/DivisionsPage';
import DivisionDetailPage from './pages/DivisionDetailPage';
import ManufacturingPage from './pages/ManufacturingPage';
import ProductsPage from './pages/ProductsPage';
import TherapeuticDetailPage from './pages/TherapeuticDetailPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/divisions" element={<DivisionsPage />} />
            <Route path="/divisions/:slug" element={<DivisionDetailPage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:slug" element={<TherapeuticDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
