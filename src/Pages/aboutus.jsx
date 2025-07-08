import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import AboutImage from '../assets/about-us.jpg';

const AboutUs = () => {
  return (
    <>
      <Header />

      {/* Hero Banner */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${AboutImage})` }}
      >
        <h1 className="text-4xl font-bold text-white bg-black bg-opacity-50 px-6 py-3 rounded-lg">
          About Us
        </h1>
      </div>

      {/* About Us Details */}
      <div className="py-14 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Welcome to Get Pet!</h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed mb-12 text-lg">
          We’re passionate about connecting pets with loving families. Whether you're looking to adopt or buy, we provide trusted services with a focus on pet welfare and happiness.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
          <div>
            <h3 className="text-2xl font-semibold text-purple-600 mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed text-base">
              To promote responsible pet ownership and make pet adoption and purchasing simple, safe, and joyful for everyone.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-purple-600 mb-3">Why Choose Us?</h3>
            <p className="text-gray-700 leading-relaxed text-base">
              We offer verified listings, caring support, and a wide range of pets, making it easy for you to find your perfect furry or feathered friend.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
