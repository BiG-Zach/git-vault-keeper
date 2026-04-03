import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageProgressBar from '../components/chrome/PageProgressBar';
import { SeoProvider } from '../components/SeoProvider';
import type { SeoCollector } from '../components/SeoProvider';

type AppShellProps = {
  children: ReactNode;
  seoCollector?: SeoCollector;
};

export default function AppShell({ children, seoCollector }: AppShellProps) {
  return (
    <SeoProvider collector={seoCollector}>
      <PageProgressBar />
      <Header />
      {children}
      <Footer />
    </SeoProvider>
  );
}
