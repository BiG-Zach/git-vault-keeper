import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/',
};

export function middleware(req: NextRequest) {
  // Determine the bucket from a cookie
  let bucket = req.cookies.get('bucket')?.value;
  let hasBucket = !!bucket;

  if (!bucket) {
    // If no bucket, assign one randomly
    bucket = Math.random() < 0.5 ? 'control' : 'test';
    hasBucket = false;
  }

  // Clone the URL to modify it
  const url = req.nextUrl.clone();

  // Rewrite to the test variant if in the 'test' bucket
  if (bucket === 'test') {
    url.pathname = '/home-variant-b';
  }

  const res = NextResponse.rewrite(url);

  // Add the bucket to the response cookies if it's a new user
  if (!hasBucket) {
    res.cookies.set('bucket', bucket, {
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
    });
  }

  return res;
}
