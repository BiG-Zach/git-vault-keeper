import React from 'react';
import { canonicalFor } from '../utils/seo';

interface CanonicalProps {
  path: string;
}

export default function Canonical({ path }: CanonicalProps) {
  const canonicalUrl = canonicalFor(path);
  
  return (
    <link rel="canonical" href={canonicalUrl} />
  );
}