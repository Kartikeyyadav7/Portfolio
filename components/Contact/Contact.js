import React, { useState } from "react";
import {
	Container,
	SectionTitle,
	Line,
	StyledFormWrapper,
	StyledForm,
	StyledInput,
	StyledFieldset,
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
	gender: "",
};

const Contact = () => {
	const [state, setState] = useState(initalState);
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submitted!");
		console.log(state);

		for (let key in state) {
			if (state[key] === "") {
				setError(`You must provide the ${key}`);
				return;
			}
		}
		setError("");
		// const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		// const test = regex.test(state.email);
		// console.log(test);

		console.log("Succeeded!!!");
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
				<StyledForm
					onSubmit={handleSubmit}
					name="contact"
					method="POST"
					data-netlify="true"
				>
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
