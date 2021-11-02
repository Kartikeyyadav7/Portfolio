import React from "react";
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

const Hero = () => {
	return (
		<>
			<Container>
				<HeroText>
					<HeadlineBanner>frontend developer</HeadlineBanner>
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
				<HeroImg>
					<Image src="/headlight.svg" alt="Hero Img" width={370} height={380} />
				</HeroImg>
			</Container>
			{/* <Link href="#skills" passHref>
				<ScrollDown>
					<Mouse>
						<span></span>
					</Mouse>
					<Arrow>
						<span></span>
					</Arrow>
				</ScrollDown>
			</Link> */}
		</>
	);
};

export default Hero;
