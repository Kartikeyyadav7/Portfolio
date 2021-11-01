import { useState } from "react";
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

	return (
		<Container>
			<Logo>
				<Link passHref href="/">
					<Image
						src="/kartikeylogo.svg"
						alt="Vercel Logo"
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
				<Link href="#Home" passHref>
					<NavLinkItem>Home</NavLinkItem>
				</Link>
				<Link href="#Skills" passHref>
					<NavLinkItem>Skills</NavLinkItem>
				</Link>
				<Link href="#Projects" passHref>
					<NavLinkItem>Projects</NavLinkItem>
				</Link>
				<Link href="#About" passHref>
					<NavLinkItem>About</NavLinkItem>
				</Link>
				<Link href="#Contact" passHref>
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
