
import sendEmail from '../services/sendEmail.js';
import contactEmailTemplate from "../templates/contactEmailTemplate.js";

// Handle contact / booking inquiry
export const contactController = async (req, res) => {
    try {
        const {
            fullName,
            contactNumber,
            vehicleType,
            travelDate,
            pickupTime,
        } = req.body;

        // Validate required fields
        if (
            !fullName?.trim() ||
            !contactNumber?.trim() ||
            !vehicleType?.trim() ||
            !travelDate ||
            !pickupTime
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all required fields.",
            });
        }

        // Validate Indian mobile number
        if (!/^[6-9]\d{9}$/.test(contactNumber.trim())) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid 10-digit mobile number.",
            });
        }

        // Prepare inquiry email
        const subject = `New Booking Inquiry - ${fullName.trim()}`;

        const html = contactEmailTemplate({
            fullName,
            contactNumber,
            vehicleType,
            travelDate,
            pickupTime,
        });

        // Send inquiry email
        await sendEmail(subject, html);

        return res.status(200).json({
            success: true,
            message: "Your booking inquiry has been sent successfully!",
        });

    } catch (error) {
        console.error("Contact Controller Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Unable to send your inquiry. Please try again later.",
        });
    }
};