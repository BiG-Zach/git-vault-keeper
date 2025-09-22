import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import MobileHeader from './components/MobileHeader';
import Footer from './components/Footer';
import PageProgressBar from './components/chrome/PageProgressBar';
import { StructuredData } from './components/StructuredData';
import './styles/mobile-header.css';

export default function App() {
  return (
    <HelmetProvider>
      <StructuredData schema={{ '@type': 'InsuranceAgency' }} />
      <PageProgressBar />
      <MobileHeader />
      <Header />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-jade-500"></div>
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <Footer />
    </HelmetProvider>
  );
}
