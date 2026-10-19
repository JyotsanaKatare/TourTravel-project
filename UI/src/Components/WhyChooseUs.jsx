
import React from "react";
import {
  FaShieldAlt,
  FaWallet,
  FaCarSide,
  FaHeadset,
  FaMapMarkedAlt,
  FaCheckCircle,
} from "react-icons/fa";

const features = [
  {
    icon: FaShieldAlt,
    title: "Reliable Travel Service",
    description:
      "Enjoy a comfortable travel experience with support throughout your journey.",
    number: "01",
  },
  {
    icon: FaWallet,
    title: "Budget-Friendly Options",
    description:
      "Explore available tour packages and cab services to suit your travel plans.",
    number: "02",
  },
  {
    icon: FaCarSide,
    title: "Flexible Travel Choices",
    description:
      "Choose from sightseeing trips, outstation journeys and cab services.",
    number: "03",
  },
  {
    icon: FaHeadset,
    title: "Travel Assistance",
    description:
      "Get help with your travel inquiry, destination selection and trip details.",
    number: "04",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-13"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-lime-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-green-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime-200 bg-lime-50 px-4 py-2 text-sm font-bold text-green-900">
            <FaMapMarkedAlt />
            YOUR JOURNEY, OUR PRIORITY
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Why Travel With{" "}
            <span className="text-green-800">
              Shri Sawariya?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Every journey begins with a good plan. Explore our tour
            packages and cab services to find an option that fits
            your travel needs.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.number}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-lime-300 hover:shadow-xl sm:p-7"
              >
                {/* Card Number */}
                <span className="absolute right-5 top-5 text-4xl font-black text-gray-100 transition-colors duration-300 group-hover:text-lime-100">
                  {feature.number}
                </span>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100 text-green-900 transition-all duration-300 group-hover:bg-green-900 group-hover:text-lime-300">
                  <Icon className="text-2xl" />
                </div>

                {/* Card Content */}
                <h3 className="mt-6 text-lg font-bold leading-7 text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 flex items-center gap-2 border-t border-gray-100 pt-4">
                  <FaCheckCircle className="shrink-0 text-sm text-lime-600" />

                  <span className="text-xs font-semibold text-green-900">
                    Travel Made Easier
                  </span>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-lime-400 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-green-950 px-6 py-8 sm:px-10 md:flex-row">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Ready for Your Next Journey?
            </h3>

            <p className="mt-2 text-sm leading-6 text-green-100">
              Explore our tour packages and plan your next trip.
            </p>
          </div>

          <a
            href="#packages"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 font-bold text-green-950 transition duration-300 hover:bg-white"
          >
            Explore Packages
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;