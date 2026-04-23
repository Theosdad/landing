import React from 'react';
import ScrollToTop from '@site/src/components/ScrollToTop/ScrollToTop';

export default function Root({ children }) {
  return (
    <>
      {children}
      <ScrollToTop />
    </>
  );
}
