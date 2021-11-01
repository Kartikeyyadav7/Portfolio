import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import { Layout } from "../layouts/MainLayout";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Kartikey Yadav</title>
				<meta
					name="description"
					content="Portfolio website of Kartikey Yadav"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<div className="hero"></div>
			</Layout>
		</div>
	);
}
