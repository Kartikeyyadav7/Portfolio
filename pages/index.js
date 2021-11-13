import Head from "next/head";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
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
				<Projects />
				<About />
				<Contact />
			</Layout>
		</div>
	);
}
