import React, { Suspense, lazy } from 'react';
import Spinner from '@/utils/Spinner/spinner';

const LandingComponent = lazy(() => import('@/components/index'));

export default function Home() {
  return (
    <Suspense fallback={<Spinner />}>
      <LandingComponent />
    </Suspense>
  );
}
