
import React from "react";
import { FaCheckCircle, FaCar, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import TravelBusinessCard from "../assets/Images/TravelVisitingCard.jpeg";

function AboutUs() {
  const features = [
    {
      icon: <FaCar />,
      title: "Comfortable Rides",
      description: "Comfortable vehicles for every journey.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Safe & Reliable",
      description: "Your safety and comfort come first.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Local & Outstation",
      description: "Explore your favourite destinations with us.",
    },
  ];

  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-900">
            ABOUT OUR COMPANY
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Your Journey,{" "}
            <span className="text-green-900">Our Responsibility</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Making every journey comfortable, safe and memorable with
            Shri Sawariya Tour & Travel.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-700">
              Welcome to Shri Sawariya
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight text-green-950 sm:text-4xl">
              Travel With Comfort.
              <br />
              Travel With Confidence.
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              At Shri Sawariya Tour & Travel, we aim to make every trip
              smooth and hassle-free. Whether you need a local taxi,
              an outstation cab, airport transfers or a one-day tour,
              we are here to help you travel with ease.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              From family outings to religious journeys and sightseeing,
              we help you reach your destination comfortably and reliably.
            </p>

          </div>

          {/* Right: Business Card */}
          <div className="relative mx-auto w-full max-w-md">
            {/* Decorative Background */}
            <div className="absolute -right-3 -top-3 h-full w-full rounded-2xl bg-yellow-600/20 sm:-right-5 sm:-top-5" />

            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-xl sm:p-3">
              <img
                src={TravelBusinessCard}
                alt="Shri Sawariya Tour and Travel business card"
                className="h-auto w-full rounded-xl object-contain"
                loading="lazy"
              />
            </div>

            <p className="mt-4 text-center text-sm text-gray-500">
              Shri Sawariya Tour & Travel — Safe Journey, Happy Memories
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;