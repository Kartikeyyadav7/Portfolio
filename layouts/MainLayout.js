import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

// import Footer from '../components/Footer/Footer'
import { Container } from "./MainLayoutStyles";

export const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Container>
				<main>{children}</main>
			</Container>
			<Footer />
		</>
	);
};
