// import dbConnect from "../../util/connect";
import nodemailer from "nodemailer";

export default async (req, res) => {
	const { method } = req;

	// await dbConnect();

	switch (method) {
		case "POST":
			try {
				const { name, email, messageMail } = req.body;

				const transporter = nodemailer.createTransport({
					service: "gmail",
					// secure: true,
					auth: {
						user: process.env.EMAIL,
						pass: process.env.PASSWORD,
					},
				});

				let message = {
					from: "kartikeyyadav.02468@gmail.com",
					to: "kartikeyyadav.13579@gmail.com",
					subject: `Received message from ${name}`,
					// text: `You received email from ${email} and this is the message ${messageMail}`,
					html: `
						<h3>You received email from ${email}</h3>
						<p>${messageMail}</p>
					`,
				};

				await transporter.sendMail(message, (error, info) => {
					if (error) {
						console.log(error);
						res.json("error");
					} else {
						console.log(info);
						res.status(200).json("Email sent");
					}
				});
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};
