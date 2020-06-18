import React, { lazy, Suspense } from 'react';

const LazyAutocomplete = lazy(() => import('./Autocomplete'));

const Autocomplete = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAutocomplete {...props} />
  </Suspense>
);

export default Autocomplete;
