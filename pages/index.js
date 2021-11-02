import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Skills from "../components/Skills/Skills";
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
				<Hero />
				<Skills />
			</Layout>
		</div>
	);
}
