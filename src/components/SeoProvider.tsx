import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { ResolvedSEO } from '../utils/seo';

export type SeoCollector = {
  register(config: ResolvedSEO): void;
};

const noopCollector: SeoCollector = {
  register() {
    /* no-op on client */
  },
};

const SeoContext = createContext<SeoCollector>(noopCollector);

type SeoProviderProps = {
  children: ReactNode;
  collector?: SeoCollector;
};

export function SeoProvider({ children, collector }: SeoProviderProps) {
  return <SeoContext.Provider value={collector ?? noopCollector}>{children}</SeoContext.Provider>;
}

export function useSeoCollector() {
  return useContext(SeoContext);
}
