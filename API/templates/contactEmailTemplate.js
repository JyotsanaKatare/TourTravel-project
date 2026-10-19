
const contactEmailTemplate = ({
    fullName,
    contactNumber,
    vehicleType,
    travelDate,
    pickupTime,
}) => {
    const escapeHtml = (value) =>
        String(value ?? "").replace(/[&<>"']/g, (char) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        })[char]);

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Booking Inquiry</title>
    </head>

    <body style="margin:0; padding:0; background-color:#f4f7f4; font-family:Arial,Helvetica,sans-serif;">

        <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
            style="background-color:#f4f7f4; padding:30px 12px;">
            <tr>
                <td align="center">

                    <table width="600" cellpadding="0" cellspacing="0" role="presentation"
                        style="width:100%; max-width:600px; background-color:#ffffff; border-radius:12px; overflow:hidden;">

                        <!-- Header -->
                        <tr>
                            <td align="center"
                                style="background-color:#14532d; padding:28px 20px; border-bottom:4px solid #d4a72c;">

                                <h1 style="margin:0; color:#ffffff; font-size:25px; line-height:1.4;">
                                    Shri Sawariya
                                </h1>

                                <p style="margin:4px 0 0; color:#facc15; font-size:15px; letter-spacing:1px;">
                                    TOUR &amp; TRAVEL
                                </p>

                                <p style="margin:12px 0 0; color:#e5e7eb; font-size:13px;">
                                    New Booking Inquiry Received
                                </p>
                            </td>
                        </tr>

                        <!-- Main Content -->
                        <tr>
                            <td style="padding:28px 24px;">

                                <h2 style="margin:0 0 12px; color:#14532d; font-size:21px;">
                                    New Customer Inquiry!
                                </h2>

                                <p style="margin:0 0 22px; color:#4b5563; font-size:14px; line-height:1.7;">
                                    You have received a new booking inquiry through your website.
                                    Here are the customer's details:
                                </p>

                                <!-- Customer Details -->
                                <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                                    style="border-collapse:collapse;">

                                    <tr>
                                        <td style="padding:13px 12px; background-color:#f0fdf4; border-bottom:1px solid #e5e7eb; color:#166534; font-size:14px; font-weight:bold;">
                                            Customer Name
                                        </td>
                                        <td style="padding:13px 12px; border-bottom:1px solid #e5e7eb; color:#374151; font-size:14px;">
                                            ${escapeHtml(fullName)}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style="padding:13px 12px; background-color:#f0fdf4; border-bottom:1px solid #e5e7eb; color:#166534; font-size:14px; font-weight:bold;">
                                            Contact Number
                                        </td>
                                        <td style="padding:13px 12px; border-bottom:1px solid #e5e7eb; color:#374151; font-size:14px;">
                                            ${escapeHtml(contactNumber)}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style="padding:13px 12px; background-color:#f0fdf4; border-bottom:1px solid #e5e7eb; color:#166534; font-size:14px; font-weight:bold;">
                                            Vehicle Type
                                        </td>
                                        <td style="padding:13px 12px; border-bottom:1px solid #e5e7eb; color:#374151; font-size:14px;">
                                            ${escapeHtml(vehicleType)}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style="padding:13px 12px; background-color:#f0fdf4; border-bottom:1px solid #e5e7eb; color:#166534; font-size:14px; font-weight:bold;">
                                            Travel Date
                                        </td>
                                        <td style="padding:13px 12px; border-bottom:1px solid #e5e7eb; color:#374151; font-size:14px;">
                                            ${escapeHtml(travelDate)}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style="padding:13px 12px; background-color:#f0fdf4; color:#166534; font-size:14px; font-weight:bold;">
                                            Pickup Time
                                        </td>
                                        <td style="padding:13px 12px; color:#374151; font-size:14px;">
                                            ${escapeHtml(pickupTime)}
                                        </td>
                                    </tr>

                                </table>

                                <!-- Action Message -->
                                <div style="margin-top:24px; padding:16px; background-color:#fffbeb; border-left:4px solid #d4a72c; border-radius:4px;">
                                    <p style="margin:0; color:#78350f; font-size:14px; line-height:1.7;">
                                        <strong>Next Step:</strong> Please contact the customer to confirm
                                        availability, pricing, and booking details.
                                    </p>
                                </div>

                            </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                            <td align="center"
                                style="padding:20px; background-color:#f9fafb; border-top:1px solid #e5e7eb;">

                                <p style="margin:0; color:#14532d; font-size:14px; font-weight:bold;">
                                    Shri Sawariya Tour &amp; Travel
                                </p>

                                <p style="margin:7px 0 0; color:#6b7280; font-size:12px; line-height:1.6;">
                                    Thank you for choosing us for your travel needs.
                                </p>

                                <p style="margin:12px 0 0; color:#9ca3af; font-size:11px;">
                                    This is an automated email sent from your website.
                                </p>

                            </td>
                        </tr>

                    </table>

                </td>
            </tr>
        </table>

    </body>
    </html>
    `;
};

export default contactEmailTemplate;