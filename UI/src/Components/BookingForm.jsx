
import React, { useState } from "react";
import axios from "axios";
import {
    FaUser,
    FaPhoneAlt,
    FaCar,
    FaCalendarAlt,
    FaClock,
    FaPaperPlane,
    FaCheckCircle,
    FaExclamationCircle,
} from "react-icons/fa";

function BookingForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        contactNumber: "",
        vehicleType: "",
        travelDate: "",
        pickupTime: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({
        type: "",
        text: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setMessage({
            type: "",
            text: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);
        setMessage({
            type: "",
            text: "",
        });

        try {
            const response = await axios.post(
                "http://localhost:5000/api/contact-form",
                formData
            );

            setMessage({
                type: "success",
                text:
                    response.data.message ||
                    "Your inquiry has been sent successfully!",
            });

            setFormData({
                fullName: "",
                contactNumber: "",
                vehicleType: "",
                travelDate: "",
                pickupTime: "",
            });
        } catch (error) {
            setMessage({
                type: "error",
                text:
                    error.response?.data?.message ||
                    "Unable to send your inquiry. Please try again later.",
            });
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        "w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-800 focus:bg-white focus:ring-2 focus:ring-green-800/10";

    const labelClass = "mb-2 block text-sm font-semibold text-gray-700";

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-16 sm:py-20 lg:py-24"
        >
            {/* Decorative Background */}
            <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl" />
            <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-green-900/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
                {/* Heading */}
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-yellow-600/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-green-950">
                        <FaCar className="text-yellow-700" />
                        YOUR JOURNEY STARTS HERE
                    </span>

                    <h2 className="mt-5 text-3xl font-bold tracking-tight text-green-950 sm:text-4xl lg:text-5xl">
                        Contact <span className="text-yellow-600">Us</span>
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                        Have a travel plan? Share your details with us and we will help
                        you plan a comfortable journey with Shri Sawariya Tour & Travel.
                    </p>
                </div>

                {/* Booking Card */}
                <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-green-950/10 ring-1 ring-gray-200/70">
                    {/* Card Header */}
                    <div className="bg-green-950 px-6 py-6 sm:px-10 sm:py-7">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-xl text-green-950">
                                <FaCar />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white sm:text-2xl">
                                    Get In Touch
                                </h3>
                                <p className="mt-1 text-sm text-green-100/80">
                                    Share your details and let us help you with your travel plans.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 sm:p-10">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className={labelClass}>
                                    Full Name <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        id="fullName"
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        autoComplete="name"
                                        className={inputClass}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Contact Number */}
                            <div>
                                <label htmlFor="contactNumber" className={labelClass}>
                                    Contact Number <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        id="contactNumber"
                                        type="tel"
                                        name="contactNumber"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        placeholder="Enter your mobile number"
                                        autoComplete="tel"
                                        inputMode="numeric"
                                        pattern="[0-9]{10}"
                                        maxLength={10}
                                        title="Please enter a valid 10-digit mobile number."
                                        className={inputClass}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Vehicle Type */}
                            <div>
                                <label htmlFor="vehicleType" className={labelClass}>
                                    Vehicle Type <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <FaCar className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <select
                                        id="vehicleType"
                                        name="vehicleType"
                                        value={formData.vehicleType}
                                        onChange={handleChange}
                                        className={`${inputClass} appearance-none`}
                                        required
                                    >
                                        <option value="" disabled>
                                            Select your vehicle
                                        </option>
                                        <option value="Hatchback">Hatchback</option>
                                        <option value="Sedan">Sedan / Dzire</option>
                                        <option value="SUV">SUV</option>
                                        <option value="Ertiga">Ertiga</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Travel Date */}
                            <div>
                                <label htmlFor="travelDate" className={labelClass}>
                                    Travel Date <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        id="travelDate"
                                        type="date"
                                        name="travelDate"
                                        value={formData.travelDate}
                                        onChange={handleChange}
                                        min={new Date().toLocaleDateString("en-CA")}
                                        className={inputClass}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Pickup Time */}
                            <div className="sm:col-span-2">
                                <label htmlFor="pickupTime" className={labelClass}>
                                    Pickup Time <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        id="pickupTime"
                                        type="time"
                                        name="pickupTime"
                                        value={formData.pickupTime}
                                        onChange={handleChange}
                                        className={inputClass}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button and Feedback */}
                        <div className="mt-8 border-t border-gray-100 pt-7">
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-950 px-6 py-4 font-semibold text-white shadow-lg shadow-green-950/15 transition duration-300 hover:-translate-y-0.5 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {loading ? "Sending..." : "Contact Us"}

                                {!loading && <FaPaperPlane className="text-yellow-400" />}
                            </button>

                            {message.text && (
                                <p
                                    role={message.type === "error" ? "alert" : "status"}
                                    aria-live="polite"
                                    className={`mt-4 flex items-center justify-center gap-2 text-center text-sm font-medium ${
                                        message.type === "success"
                                            ? "text-green-800"
                                            : "text-red-600"
                                    }`}
                                >
                                    {message.type === "success" ? (
                                        <FaCheckCircle className="shrink-0" />
                                    ) : (
                                        <FaExclamationCircle className="shrink-0" />
                                    )}

                                    {message.text}
                                </p>
                            )}

                            <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                                Your journey matters to us. We look forward to serving you!
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default BookingForm;