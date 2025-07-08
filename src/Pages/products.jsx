import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';

const ProductsPage = () => {
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Products Content */}
      <div className="py-10 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <p className="text-gray-700">
          Here you'll find all our lovely pets available for adoption or purchase!
        </p>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default ProductsPage;
