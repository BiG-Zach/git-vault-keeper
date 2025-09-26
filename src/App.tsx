import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      <Header />
      <Suspense fallback={<div className="flex-1 flex items-center justify-center"><p>Loading...</p></div>}>
        <main className="flex-1">
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
