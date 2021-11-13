import React from "react";
import { Container, Description, Line, SectionTitle } from "./AboutStyles";

const About = () => {
	return (
		<Container>
			<SectionTitle>About Me</SectionTitle>
			<Line></Line>
			<Description>
				Hello! My name is Kartikey and I am a Full stack developer mainly
				focused on frontend development .<br></br>I can help you with your needs
				for development or designing a web or mobile application with the best
				of my abilities
			</Description>
		</Container>
	);
};

export default About;
