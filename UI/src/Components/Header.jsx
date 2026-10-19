import { useState } from "react";
import { FiPhone } from "react-icons/fi";
import Logo from "../assets/Images/ShriSawariyaTravelLogo.png";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Tour Packages", href: "#packages" },
    { name: "Destinations", href: "#destinations" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      
      {/* Top contact bar */}
      <div className="bg-green-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 sm:text-sm lg:px-8">
          <p className="hidden sm:block">
            Explore India with comfort & confidence!
          </p>

          <a
            href="tel:7489000122"
            className="ml-auto flex items-center gap-2 transition hover:text-lime-300"
          >
            <FiPhone className="h-4 w-4 text-lime-400" />
            +91 74890 0122
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}

        <div className="flex shrink-0 items-center rounded-2xl">
          <a href="#home" aria-label="Shri Sawariya Tour & Travel home">
            <img
              src={Logo}
              alt="Shri Sawariya Tour & Travel"
              className="h-12 w-25 object-contain sm:h-16 sm:w-40 rounded-xl"
            />
          </a>
        </div>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-2 text-sm font-semibold text-gray-700 transition-colors duration-300 hover:text-green-800 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-lime-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-lime-500 px-5 py-3 text-sm font-bold text-green-950 shadow-md transition duration-300 hover:bg-green-800 hover:text-white lg:inline-flex"
        >
          Book Your Trip
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={ menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="flex h-8 w-10 items-center justify-center rounded-lg border border-gray-200 text-green-900 transition hover:bg-green-50 lg:hidden"
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-gray-100 bg-white px-5 pb-5 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-gray-100 py-3.5 text-sm font-semibold text-gray-700 transition hover:pl-2 hover:text-green-800"
              >
                {link.name}
              </a>
            ))}

            <a
              href="tel:7489000122"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-lime-500 px-5 py-3.5 font-bold text-green-950 transition hover:bg-green-800 hover:text-white"
            >
              Call Now: +91 74890 0122
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
