import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageProgressBar from './components/chrome/PageProgressBar';

export default function App() {
  return (
    <>
      <PageProgressBar />
      <Header />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-jade-500"></div>
        </div>
      }>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}
