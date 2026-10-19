
import React from "react";
import Logo from "../assets/Images/ShriSawariyaTravelLogo.png";
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaArrowRight,
    FaCar,
} from "react-icons/fa";

function Footer() {
    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Tour Packages", href: "#packages" },
        { name: "Contact Us", href: "#contact" },
    ];

    const destinations = [
        "Indore",
        "Ujjain",
        "Omkareshwar",
        "Maheshwar",
        "Mandav",
        "Baglamukhi",
    ];

    return (
        <footer className="bg-green-950 text-white">
            
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

                    {/* Brand */}
                    <div>
                        <a
                            href="#home"
                            className="inline-flex items-center gap-3"
                            aria-label="Shri Sawariya Tour and Travel home"
                        >
                            {/* Logo with golden border */}
                            <div className="rounded-2xl shadow-lg shadow-yellow-500/20">
                                <div className="rounded-xl bg-white p-1">
                                    <img
                                        src={Logo}
                                        alt="Shri Sawariya Tour & Travel"
                                        className="h-14 w-36 rounded-lg object-contain sm:h-16 sm:w-40"
                                    />
                                </div>
                            </div>

                           
                        </a>


                        <p className="mt-5 max-w-sm text-sm leading-7 text-green-100/75">
                            Explore your favourite destinations with comfort and confidence.
                            We make every journey safe, smooth and memorable.
                        </p>

                        {/* Social Links */}
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-yellow-400 hover:bg-yellow-500 hover:text-green-950"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://www.instagram.com/shri_sawariya_tourntravel?obrf=MnNsZmtid2ZscWM3"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-yellow-400 hover:bg-yellow-500 hover:text-green-950"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://wa.me/917489000122"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="WhatsApp"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-yellow-400 hover:bg-yellow-500 hover:text-green-950"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold">
                            Quick Links
                            <span className="mt-3 block h-1 w-12 rounded-full bg-yellow-500" />
                        </h3>

                        <ul className="mt-6 space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="group inline-flex items-center gap-2 text-sm text-green-100/75 transition hover:text-yellow-400"
                                    >
                                        <FaArrowRight className="text-xs text-yellow-500 transition group-hover:translate-x-1" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h3 className="text-lg font-bold">
                            Popular Destinations
                            <span className="mt-3 block h-1 w-12 rounded-full bg-yellow-500" />
                        </h3>

                        <ul className="mt-6 space-y-4">
                            {destinations.map((destination) => (
                                <li key={destination}>
                                    <a
                                        href="#packages"
                                        className="group inline-flex items-center gap-2 text-sm text-green-100/75 transition hover:text-yellow-400"
                                    >
                                        <FaArrowRight className="text-xs text-yellow-500 transition group-hover:translate-x-1" />
                                        {destination}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold">
                            Contact Us
                            <span className="mt-3 block h-1 w-12 rounded-full bg-yellow-500" />
                        </h3>

                        <div className="mt-6 space-y-5">
                            <div className="flex items-start gap-3">
                                <FaPhoneAlt className="mt-1 shrink-0 text-yellow-400" />
                                <div>
                                    <p className="text-xs text-green-100/60">
                                        Call Us
                                    </p>
                                    <a
                                        href="tel:7489000122"
                                        className="mt-1 block text-sm transition hover:text-yellow-400"
                                    >
                                        +91 74890 00122
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaEnvelope className="mt-1 shrink-0 text-yellow-400" />
                                <div>
                                    <p className="text-xs text-green-100/60">
                                        Email Us
                                    </p>
                                    <a
                                        href="mailto:info@example.com"
                                        className="mt-1 block break-all text-sm transition hover:text-yellow-400"
                                    >
                                        info@example.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 shrink-0 text-yellow-400" />
                                <div>
                                    <p className="text-xs text-green-100/60">
                                        Our Location
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-green-100/80">
                                        Indore, Madhya Pradesh, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="#contact"
                            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 text-sm font-bold text-green-950 transition hover:bg-yellow-400"
                        >
                            Contact Us
                            <FaArrowRight />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:px-8 md:flex-row md:text-left">
                    <p className="text-xs leading-6 text-green-100/60 sm:text-sm">
                        © {new Date().getFullYear()} Shri Sawariya Tour & Travel.
                        All rights reserved.
                    </p>

                    <a
                        href="#home"
                        className="text-xs font-medium text-green-100/70 transition hover:text-yellow-400 sm:text-sm"
                    >
                        Back to Top ↑
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;