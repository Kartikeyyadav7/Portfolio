import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	Container,
	Hamburger,
	Logo,
	NavLinkItem,
	NavLinks,
} from "./NavbarStyles";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [navbarColor, setNavbarColor] = useState(false);

	const onMouseScroll = () => {
		if (window.scrollY >= 48) {
			setNavbarColor(true);
		} else {
			setNavbarColor(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", onMouseScroll);
	}, []);

	return (
		<Container navbarColor={navbarColor}>
			<Logo>
				<Link passHref href="/">
					<Image
						src="/kartikeylogo.svg"
						alt="Kartikey Logo"
						width={55}
						height={50}
					/>
				</Link>
			</Logo>

			<Hamburger open={isOpen} onClick={() => setIsOpen(!isOpen)}>
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</Hamburger>

			<NavLinks open={isOpen}>
				<Link href="/" passHref>
					<NavLinkItem>Home</NavLinkItem>
				</Link>
				<Link href="#skills" passHref>
					<NavLinkItem>Skills</NavLinkItem>
				</Link>
				<Link href="#projects" passHref>
					<NavLinkItem>Projects</NavLinkItem>
				</Link>
				<Link href="#about" passHref>
					<NavLinkItem>About</NavLinkItem>
				</Link>
				<Link href="#contact" passHref>
					<NavLinkItem>Contact</NavLinkItem>
				</Link>
				<NavLinkItem>
					<FiSun />
				</NavLinkItem>
			</NavLinks>
		</Container>
	);
};

export default Navbar;
