import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Meta from "../components/Meta";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import { Layout } from "../layouts/MainLayout";

export default function Home() {
	return (
		<div>
			<Meta />
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
