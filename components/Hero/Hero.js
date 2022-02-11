import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	Container,
	CTAButton,
	HeaderMainText,
	HeaderSubText,
	HeadlineBanner,
	HeroImg,
	HeroText,
	Button,
	ScrollDown,
	Mouse,
	Arrow,
} from "./HeroStyles";
import { FiArrowRight } from "react-icons/fi";
import { ThemeContext } from "../../Context/ThemeContext";

const Hero = () => {
	const [theme, setTheme] = useContext(ThemeContext);
	return (
		<>
			<Container>
				<HeroText>
					<HeadlineBanner>FullStack developer</HeadlineBanner>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					<HeaderMainText>Hi, I'm Kartikey</HeaderMainText>
					<HeaderSubText>I develop products for mobile and web</HeaderSubText>
					<Button>
						<Link href="#projects" passHref>
							<CTAButton>
								<div style={{ padding: `1rem` }}>Check Projects</div>
								<FiArrowRight style={{ marginRight: `1rem` }} />
							</CTAButton>
						</Link>
					</Button>
				</HeroText>
				{theme === "dark" ? (
					<HeroImg>
						<Image
							src="/headdark.svg"
							alt="Hero Img"
							width={370}
							height={380}
						/>
					</HeroImg>
				) : (
					<HeroImg>
						<Image
							src="/headlight.svg"
							alt="Hero Img"
							width={370}
							height={380}
						/>
					</HeroImg>
				)}
			</Container>
			<Link href="#skills" passHref>
				<ScrollDown>
					<Mouse>
						<span></span>
					</Mouse>
					<Arrow>
						<span></span>
					</Arrow>
				</ScrollDown>
			</Link>
		</>
	);
};

export default Hero;
