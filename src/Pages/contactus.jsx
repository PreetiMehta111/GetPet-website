import React, { useState } from 'react';
import Header from "./header.jsx";
import Footer from "./footer.jsx";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate email sending logic or API here
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <Header />
      <section className="bg-[#fcefe3] py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:flex">
          {/* Left Panel */}
          <div className="bg-[#5C4033] text-white w-full md:w-1/3 p-6">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-4">We'd love to hear from you. Please fill out the form and we'll get back to you soon.</p>
            <div className="text-sm">
              <p><strong>Email:</strong> support@getpet.com</p>
              <p><strong>Phone:</strong> +977-9800000000</p>
              <p><strong>Location:</strong> Kathmandu, Nepal</p>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="w-full md:w-2/3 p-8">
            <h2 className="text-2xl font-bold text-[#5C4033] mb-6">Contact Us</h2>
            {submitted && (
              <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg">
                Thank you! Your message has been submitted.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#F4A261] text-white px-6 py-2 rounded-lg hover:bg-[#e6953f] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
