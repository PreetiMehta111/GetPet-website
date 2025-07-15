import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import TeamWorking from "../assets/teamworking.avif";
import WithLaptop from "../assets/withlaptop.avif";
import PetCare from "../assets/petcare.avif";
import CatIcon from "../assets/caticon.avif";

const AboutUs = () => {
  return (
    <div className="bg-[#f9f9f9] text-[#222]">
      <Header />

      {/* Section: Title */}
      <section className="px-6 md:px-20 py-12 scroll-mt-16 bg-gradient-to-r from-[#f9e4d4] to-[#fff5e6]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3d3d3d] mb-4 border-b-4 border-[#a9745b] border-dashed pb-2 inline-block">
            About Us
          </h1>
          <p className="text-sm text-gray-500">
            Learn more about our mission and the people behind GetPet
          </p>
        </div>

        {/* Section: Main Info */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-widest text-[#a9745b] mb-4">
              OUR STORY
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
              Your Vision{" "}
              <span className="text-[#a9745b] font-bold">Our Expertise</span>
              <br />
              Your Success{" "}
              <span className="text-[#a9745b] font-bold">Get Noticed</span>
              <br />
              Build Trust.{" "}
              <span className="text-[#a9745b] font-bold">Connect Hearts.</span>
            </h2>
            <p className="text-gray-600 mb-8 text-justify">
              At GetPet, we believe{" "}
              <span className="font-bold text-[#3d3d3d]">
                every pet deserves a loving home
              </span>
              . Our platform connects adopters and buyers with reputable
              breeders and shelters across the country. With{" "}
              <span className="font-bold text-[#3d3d3d]">intuitive tools</span>,{" "}
              <span className="font-bold text-[#3d3d3d]">
                safety-first practices
              </span>
              , and a passion for animal welfare, we help thousands find the
              perfect furry companion every month.
            </p>

            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-[#3d3d3d]">1k+</p>
                <p className="text-sm text-gray-500">Completed Projects</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#3d3d3d]">5k+</p>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#3d3d3d]">2+</p>
                <p className="text-sm text-gray-500">Years of Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#3d3d3d]">10+</p>
                <p className="text-sm text-gray-500">National Recognitions</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl shadow-md border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl h-[400px] md:h-[500px]">
            <img
              src={TeamWorking}
              alt="Team Working"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Section: Mission & Vision */}
        <div className="mt-16 bg-[#f9f9f9] p-6 md:p-12 rounded-xl shadow-md border border-[#e5e5e5]">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Mission Block */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e5e5e5] hover:shadow-md transition-all duration-300 h-40">
              <h3 className="text-xl font-semibold text-[#a9745b] mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm text-justify overflow-hidden">
                To make pet adoption and buying{" "}
                <span className="font-medium text-[#3d3d3d]">
                  secure, trustworthy,
                </span>{" "}
                and <span className="font-medium text-[#3d3d3d]">joyful</span>{" "}
                by bridging the gap between loving homes and pets in need.
              </p>
            </div>

            {/* Vision Block */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e5e5e5] hover:shadow-md transition-all duration-300 h-40">
              <h3 className="text-xl font-semibold text-[#a9745b] mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm text-justify overflow-hidden">
                A world where{" "}
                <span className="font-medium text-[#3d3d3d]">
                  every pet finds a home
                </span>{" "}
                and every person experiences the joy of a loyal companion.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[WithLaptop, PetCare, CatIcon].map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={image}
                alt={`Showcase ${index}`}
                className="h-56 w-full object-cover"
              />
              <div className="p-4 text-center">
                {index === 0 && (
                  <p className="font-semibold text-[#3d3d3d]">
                    Tech-Driven Experience
                  </p>
                )}
                {index === 1 && (
                  <p className="font-semibold text-[#3d3d3d]">
                    Pet Care Commitment
                  </p>
                )}
                {index === 2 && (
                  <p className="font-semibold text-[#3d3d3d]">
                    Trusted Community
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Section: Team CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-[#3d3d3d] mb-2">
            Meet Our Passionate Team
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto text-justify">
            Behind every adoption story is a team of passionate animal lovers,
            developers, and caretakers working to create a better tomorrow — for
            both pets and humans.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
