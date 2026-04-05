import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/Home/index.jsx';
import AboutPage from './pages/About/index.jsx';
import ProgramsPage from './pages/Programs/index.jsx';
import EducationPage from './pages/Education/index.jsx';
import EventsPage from './pages/Events/index.jsx';
import ResourcesPage from './pages/Resources/index.jsx';
import ContactPage from './pages/Contact/index.jsx';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
