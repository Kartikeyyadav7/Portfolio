// // import dbConnect from "../../util/connect";
// import nodemailer from "nodemailer";

// export default async (req, res) => {
// 	const { method } = req;

// 	// await dbConnect();

// 	switch (method) {
// 		case "POST":
// 			try {
// 				const { name, email, messageMail } = req.body;

// 				const transporter = nodemailer.createTransport({
// 					service: "gmail",
// 					secure: true,
// 					auth: {
// 						user: process.env.EMAIL,
// 						pass: process.env.PASSWORD,
// 					},
// 				});

// 				let message = {
// 					from: "kartikeyyadav.02468@gmail.com",
// 					to: "kartikeyyadav.13579@gmail.com",
// 					subject: `Received message from ${name}`,
// 					// text: `You received email from ${email} and this is the message ${messageMail}`,
// 					html: `
// 						<h3>You received email from ${email}</h3>
// 						<p>${messageMail}</p>
// 					`,
// 				};

// 				await transporter.sendMail(message, (error, info) => {
// 					if (error) {
// 						console.log(error);
// 						res.json("error");
// 					} else {
// 						console.log(info);
// 						res.status(200).json("Email sent");
// 					}
// 				});
// 			} catch (error) {
// 				res.status(400).json({ success: false });
// 			}
// 			break;
// 		default:
// 			res.status(400).json({ success: false });
// 			break;
// 	}
// };

const nodemailer = require("nodemailer");

export default async (req, res) => {
	const { name, email, messageMail } = req.body;

	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
		secure: true,
	});

	await new Promise((resolve, reject) => {
		// verify connection configuration
		transporter.verify(function (error, success) {
			if (error) {
				console.log(error);
				reject(error);
			} else {
				console.log("Server is ready to take our messages");
				resolve(success);
			}
		});
	});

	const mailData = {
		from: {
			name: `${name}`,
			address: `${email}`,
		},
		to: "kartikeyyadav.13579@gmail.com",
		subject: `Portfolio received message from ${name}`,
		text: `${messageMail}`,

		html: `
			<h3>You received email from ${email}</h3>
			<p>${messageMail}</p>
		`,
	};

	await new Promise((resolve, reject) => {
		// send mail
		transporter.sendMail(mailData, (err, info) => {
			if (err) {
				console.error(err);
				reject(err);
			} else {
				console.log(info);
				resolve(info);
			}
		});
	});

	res.status(200).json({ status: "OK" });
};
