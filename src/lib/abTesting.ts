export const getBucket = (cookieName: string): 'A' | 'B' => {
  if (typeof document === 'undefined') {
    return 'A'; // Default to control for SSR/prerendering
  }
  const existingBucket = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${cookieName}=`))
    ?.split('=')[1];

  if (existingBucket === 'A' || existingBucket === 'B') {
    return existingBucket;
  }

  const newBucket = Math.random() < 0.5 ? 'A' : 'B';
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${cookieName}=${newBucket}; path=/; expires=${expires}`;
  return newBucket;
};
