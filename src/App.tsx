import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppShell from './layout/AppShell';

export default function App() {
  return (
    <AppShell>
      <Suspense
        fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-jade-500"></div>
        </div>
        }
      >
        <Outlet />
      </Suspense>
    </AppShell>
  );
}
