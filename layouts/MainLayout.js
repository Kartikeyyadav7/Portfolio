import React from "react";
import Navbar from "../components/Navbar/Navbar";

// import Footer from '../components/Footer/Footer'
// import Header from '../components/Header/Header'
import { Container } from "./MainLayoutStyles";

export const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<Container>
				<main>{children}</main>
			</Container>
		</>
	);
};
