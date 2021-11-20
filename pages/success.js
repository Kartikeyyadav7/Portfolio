import React from "react";
import Link from "next/link";
import { Button, Container } from "../styles/successStyles";

const success = () => {
	return (
		<Container>
			<h3>Thank you for reaching out to me</h3>
			<div>
				Your message sent successfully to me, I will get back you see soon
			</div>
			<Link href="/">
				<Button>Go Back</Button>
			</Link>
		</Container>
	);
};

export default success;
