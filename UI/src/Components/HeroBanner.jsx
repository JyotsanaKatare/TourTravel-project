
import React from "react";
import HeroBannerImage from "../assets/Images/TravelHeroBanner.png";

function HeroBanner() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[600px] overflow-hidden bg-green-950 sm:min-h-[680px]"
    >
      {/* Background Image */}
      <img
        src={HeroBannerImage}
        alt="Beautiful scenic mountain road surrounded by lush green forests"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-950/95 via-green-950/75 to-green-950/20" />

      {/* Decorative Glow */}
      <div className="absolute -right-20 top-10 -z-10 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />

      {/* Hero Content */}
      <div className="mx-auto flex min-h-[600px] max-w-7xl items-center px-5 py-20 sm:min-h-[680px] sm:px-8 lg:px-10">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-300/30 bg-green-900/50 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300 sm:text-sm">
              Your Journey Begins Here
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Beautiful
            <span className="mt-2 block text-lime-400">
              Destinations.
            </span>
            <span className="mt-2 block text-white">
              Travel with Comfort.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
            Explore amazing destinations, enjoy comfortable journeys,
            and create unforgettable memories with Shri Sawariya
            Tour & Travel. Your next adventure starts with us.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#packages"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-lime-400 px-7 py-4 font-bold text-green-950 shadow-lg shadow-lime-950/20 transition duration-300 hover:-translate-y-1 hover:bg-lime-300"
            >
              Explore Tour Packages
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-7-7 7 7-7 7"
                />
              </svg>
            </a>

            <a
              href="tel:7489000122"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-green-950"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a2 2 0 01.95.68l1.5 4.49a2 2 0 01-.5 1.21l-2.2 1.1a11 11 0 005.49 5.49l1.1-2.2a2 2 0 011.21-.5l4.49 1.5a2 2 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
                />
              </svg>
              Call Us Now
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/20 pt-6">
            <div>
              <p className="text-sm font-semibold text-white">
                Comfortable Travel
              </p>
              <p className="mt-1 text-xs text-gray-300">
                Relax and enjoy the ride
              </p>
            </div>

            <div className="hidden h-10 w-px bg-white/20 sm:block" />

            <div>
              <p className="text-sm font-semibold text-white">
                Memorable Journeys
              </p>
              <p className="mt-1 text-xs text-gray-300">
                Discover places you love
              </p>
            </div>

            <div className="hidden h-10 w-px bg-white/20 sm:block" />

            <div>
              <p className="text-sm font-semibold text-white">
                Personalised Trips
              </p>
              <p className="mt-1 text-xs text-gray-300">
                Travel your way
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-lime-400 via-green-500 to-transparent" />
    </section>
  );
}

export default HeroBanner;