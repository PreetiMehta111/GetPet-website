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
      <section className="bg-gradient-to-br from-[#fff0e6] to-[#ffeae0] py-16 px-4 md:px-10 font-sans">
        <h2 className="text-center text-4xl font-bold text-[#5C4033] mb-12 tracking-wide">
          Contact Us
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/90 p-10 rounded-2xl shadow-2xl backdrop-blur-sm">
          {/* Contact Info */}
          <div className="space-y-6 text-[#333] text-base text-justify">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-[#F4A261]" />
              <span>GetPet Nepal, Damak Road, Jhapa, Nepal</span>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 text-[#F4A261]" />
              <span>support@getpet.com.np</span>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-[#F4A261]" />
              <span>+977-9801234567</span>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="mt-1 text-[#F4A261]" />
              <div>
                <p>Sunday - Friday: 9:30 AM – 5:00 PM</p>
                <p>Saturday: Closed</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="mt-1 text-[#F4A261]" />
              <span>www.getpet.com.np</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 text-justify">
            {submitted && (
              <div className="bg-green-100 text-green-800 p-3 rounded text-sm shadow">
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
              className="w-full border border-gray-300 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
            ></textarea>
           <button
  type="submit"
  className="bg-[#5C4033] hover:bg-[#8B5E3C] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
>
  Send Message
</button>


            <p className="text-center text-sm text-[#555] mt-4 italic">
              We love hearing from you  — your thoughts mean the world to us!
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
