import React from "react";

// import Footer from '../components/Footer/Footer'
// import Header from '../components/Header/Header'
import { Container } from "./MainLayoutStyles";

export const Layout = ({ children }) => {
	return (
		<Container>
			<main>{children}</main>
		</Container>
	);
};
