
import { useState } from "react";

import IndoreImage from "../assets/Images/IndoreImage.jpg";
import BaglamukhiImage from "../assets/Images/BaglamukhiImage.jpg";
import UjjainImage from "../assets/Images/UjjainImage.jpg";
import OmkareshwarImage from "../assets/Images/OmkareshwarImage.jpg";
import MaheshwarImage from "../assets/Images/MaheshwarImage.jpg";
import MandavImage from "../assets/Images/MandavImage.jpg";

const destinations = [
  {
    name: "Indore Sightseeing",
    image: IndoreImage,
    price: 2750,
    description: "Explore the famous attractions of Indore.",
    type: "Sightseeing",
  },
  {
    name: "Ujjain",
    image: UjjainImage,
    price: null,
    description: "Visit the spiritual city of Mahakal.",
    type: "Tour",
  },
  {
    name: "Omkareshwar",
    image: OmkareshwarImage,
    price: null,
    description: "Discover the sacred Narmada river destination.",
    type: "Tour",
  },
  {
    name: "Maheshwar",
    image: MaheshwarImage,
    price: null,
    description: "Explore historic ghats and beautiful heritage.",
    type: "Tour",
  },
  {
    name: "Mandav (Mandu)",
    image: MandavImage,
    price: null,
    description: "Experience the heritage of Mandu.",
    type: "Tour",
  },
  {
    name: "Baglamukhi Temple",
    image: BaglamukhiImage,
    price: 4000,
    description: "Plan your visit to Maa Baglamukhi Temple.",
    type: "Temple Trip",
  },
];

const cabServices = [
  {
    name: "Airport Cab Services",
    price: null,
    description: "Convenient airport pickup and drop service.",
  },
  {
    name: "One Way Cab to Ujjain",
    price: 1400,
    description: "One-way cab service from Indore to Ujjain.",
  },
  {
    name: "One Way Cab to Bhopal",
    price: 2700,
    description: "One-way cab service for your Bhopal journey.",
  },
];

function TourPackages() {

  const handleSelect = (service) => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="packages"
      className="bg-gradient-to-b from-white via-green-50/40 to-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-lime-100 px-4 py-2 text-sm font-bold text-green-900">
            EXPLORE WITH US
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Popular Tour{" "}
            <span className="text-green-800">Packages</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Discover beautiful destinations, spiritual places, and
            comfortable cab services with Shri Sawariya Tour & Travel.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-green-900">
                  {destination.type}
                </span>

                <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white">
                  {destination.name}
                </h3>
              </div>

              <div className="p-4">
                <p className="min-h-10 text-sm leading-6 text-gray-600">
                  {destination.description}
                </p>

                <div className="mt-3 flex items-center justify-between gap-3 border-t border-gray-100 pt-3">
                  <div>
                    <p className="text-xs text-gray-500">
                      {destination.price ? "Listed fare" : "Pricing"}
                    </p>

                    <p className="mt-1 text-xl font-extrabold text-green-900">
                      {destination.price
                        ? `₹${destination.price.toLocaleString("en-IN")}`
                        : "Enquire"}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSelect(destination)}
                    className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-4 py-2.5 text-sm font-bold text-green-950 transition hover:bg-green-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                  >
                    Select <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Cab Services */}
        <div className="mt-16">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-widest text-green-800">
              Travel Made Easy
            </p>

            <h3 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Cab & Airport Services
            </h3>

            <p className="mt-3 max-w-2xl text-gray-600">
              Choose a cab service for your next journey.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {cabServices.map((service) => (
              <article
                key={service.name}
                className="group rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-lime-400 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-100 text-green-900">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 17h14l1-5-2-5H6l-2 5 1 5Zm0 0v2m14-2v2M5 12h14M7 15h.01M17 15h.01"
                    />
                  </svg>
                </div>

                <h4 className="mt-5 text-lg font-bold text-gray-900">
                  {service.name}
                </h4>

                <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xl font-extrabold text-green-900">
                    {service.price
                      ? `₹${service.price.toLocaleString("en-IN")}`
                      : "Enquire"}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleSelect(service)}
                    className="font-bold text-green-800 transition hover:text-lime-600"
                  >
                    Book Now →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default TourPackages;
