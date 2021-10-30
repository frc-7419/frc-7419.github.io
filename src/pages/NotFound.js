import React from 'react';

import Header from '../partials/Header';

function NotFound() {
  return (
    <section className="relative">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pt-12 text-center">
            <h2 className="h2 text-gray-700">404: Page not Found</h2>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default NotFound;