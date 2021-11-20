import React, { useState } from "react";
import { useRouter } from "next/router";
import {
	Container,
	SectionTitle,
	Line,
	StyledFormWrapper,
	StyledForm,
	StyledInput,
	StyledButton,
	StyledError,
	StyledTextArea,
	ContactImg,
} from "./ContactStyles";
import Image from "next/image";

const initalState = {
	name: "",
	email: "",
	message: "",
};

const Contact = () => {
	const [state, setState] = useState(initalState);
	const [error, setError] = useState("");
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		// for (let key in state) {
		// 	if (state[key] === "") {
		// 		setError(`You must provide the ${key}`);
		// 		return;
		// 	}
		// }
		// setError("");

		// https://kartikeyyadav.vercel.app/api/contact

		const data = {
			name: state.name,
			email: state.email,
			messageMail: state.message,
		};

		await fetch("https://kartikeyyadav.vercel.app/api/contact/", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		// await fetch("http://localhost:3000/api/contact/", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(data),
		// });

		router.push("/success");

		console.log("message sent");
	};

	const handleInput = (e) => {
		const inputName = e.currentTarget.name;
		const value = e.currentTarget.value;

		setState((prev) => ({ ...prev, [inputName]: value }));
	};

	return (
		<Container id="contact">
			<SectionTitle>Contact Me</SectionTitle>
			<Line></Line>
			<StyledFormWrapper>
				<StyledForm onSubmit={handleSubmit}>
					<label htmlFor="name">Name</label>
					<StyledInput
						type="text"
						name="name"
						value={state.name}
						onChange={handleInput}
					/>
					<label htmlFor="email">Email</label>
					<StyledInput
						type="email"
						name="email"
						value={state.email}
						onChange={handleInput}
					/>

					<label htmlFor="message">Message</label>
					<StyledTextArea
						type="text"
						name="message"
						value={state.message}
						onChange={handleInput}
					/>
					{error && (
						<StyledError>
							<p>{error}</p>
						</StyledError>
					)}
					<StyledButton type="submit">Send Message</StyledButton>
				</StyledForm>
				<ContactImg>
					<Image
						src="/contactImg.svg"
						alt="Project Img"
						width={500}
						height={500}
					/>
				</ContactImg>
			</StyledFormWrapper>
		</Container>
	);
};

export default Contact;
