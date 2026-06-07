import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import AppLayout from './components/AppLayout';

// Lazy loaded pages for instant initial load (Code Splitting)
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const Combos = React.lazy(() => import('./pages/Combos'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Ultra-fast page transition wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.2 } }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    style={{ width: '100%', height: '100%' }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    // mode="wait" ensures the old page fully fades out before the new one fades in
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AppLayout />}>
          <Route index element={
            <Suspense fallback={<div className="loading-spinner"></div>}>
              <PageWrapper><Home /></PageWrapper>
            </Suspense>
          } />
          <Route path="services" element={
            <Suspense fallback={<div className="loading-spinner"></div>}>
              <PageWrapper><Services /></PageWrapper>
            </Suspense>
          } />
          <Route path="combos" element={
            <Suspense fallback={<div className="loading-spinner"></div>}>
              <PageWrapper><Combos /></PageWrapper>
            </Suspense>
          } />
          <Route path="gallery" element={
            <Suspense fallback={<div className="loading-spinner"></div>}>
              <PageWrapper><Gallery /></PageWrapper>
            </Suspense>
          } />
          <Route path="contact" element={
            <Suspense fallback={<div className="loading-spinner"></div>}>
              <PageWrapper><Contact /></PageWrapper>
            </Suspense>
          } />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
