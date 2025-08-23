import React, { useState } from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import { Mail, MapPin, Phone, Clock, Globe } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <Header />

      <section
        className="relative py-20 px-4 md:px-10 font-sans bg-cover bg-center"
        style={{
          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9VQ9WjoHKJhUm1yb5Ji4rd0Ki0lh77XScQ&s')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-center text-5xl font-extrabold text-white mb-16 drop-shadow-lg tracking-wide animate-fade-in">
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/10 p-10 rounded-3xl shadow-2xl backdrop-blur-md text-white animate-slide-up">
            {/* Contact Info */}
            <div className="space-y-6 text-lg text-justify">
              <div className="flex items-start gap-4 group">
                <MapPin className="mt-1 text-[#F4A261] group-hover:scale-110 transition" />
                <span>GetPet Nepal, Damak Road, Jhapa, Nepal</span>
              </div>
              <div className="flex items-start gap-4 group">
                <Mail className="mt-1 text-[#F4A261] group-hover:scale-110 transition" />
                <span>support@getpet.com.np</span>
              </div>
              <div className="flex items-start gap-4 group">
                <Phone className="mt-1 text-[#F4A261] group-hover:scale-110 transition" />
                <span>+977-9801234567</span>
              </div>
              <div className="flex items-start gap-4 group">
                <Clock className="mt-1 text-[#F4A261] group-hover:scale-110 transition" />
                <div>
                  <p>Sunday - Friday: 9:30 AM – 5:00 PM</p>
                  <p>Saturday: Closed</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <Globe className="mt-1 text-[#F4A261] group-hover:scale-110 transition" />
                <span>www.getpet.com.np</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 text-justify">
              {submitted && (
                <div className="bg-green-100 text-green-800 p-3 rounded text-sm shadow-md animate-bounce">
                  Thank you! Your message has been submitted.
                </div>
              )}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/80 text-black border border-gray-300 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261] backdrop-blur-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/80 text-black border border-gray-300 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261] backdrop-blur-md"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-white/80 text-black border border-gray-300 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261] backdrop-blur-md"
              ></textarea>
              <button
                type="submit"
                className="bg-[#5C4033] hover:bg-[#8B5E3C] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                Send Message
              </button>

              <p className="text-center text-sm text-white/80 mt-4 italic">
                We love hearing from you — your thoughts mean the world to us!
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
