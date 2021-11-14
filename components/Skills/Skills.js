import React, { useContext } from "react";
import { MdDesignServices } from "react-icons/md";
import { FaReact, FaDatabase } from "react-icons/fa";
import {
	Card,
	CardContent,
	CardDetailsContainer,
	CardImg,
	CardImgContainer,
	CardStrip,
	CardTitle,
	Container,
	Line,
	SectionTitle,
	SkillCards,
} from "./SkillStyles";
import { ThemeContext } from "../../Context/ThemeContext";

const Skills = () => {
	const [theme, setTheme] = useContext(ThemeContext);
	return (
		<Container id="skills">
			<SectionTitle>Skills</SectionTitle>
			<Line></Line>
			<SkillCards>
				<Card>
					<CardImgContainer>
						{theme === "dark" ? (
							<FaReact
								style={{ width: `41px`, height: `29px`, marginTop: `.5rem` }}
								fill="white"
							/>
						) : (
							<FaReact
								style={{ width: `41px`, height: `29px`, marginTop: `.5rem` }}
								fill="black"
							/>
						)}
					</CardImgContainer>
					{/* <CardDetailsContainer> */}
					<CardTitle>Frontend</CardTitle>
					<CardStrip></CardStrip>
					<CardContent>
						<div>HTML</div>
						<div>CSS</div>
						<div>Javascript</div>
						<div>Reactjs</div>
						<div>Redux</div>
						<div>Nextjs</div>
						<div>React Native</div>
						<div>Typescript</div>
					</CardContent>
					{/* </CardDetailsContainer> */}
				</Card>
				<Card>
					<CardImgContainer>
						{theme === "dark" ? (
							<FaDatabase
								style={{ width: `41px`, height: `29px`, marginTop: `.5rem` }}
								fill="white"
							/>
						) : (
							<FaDatabase
								style={{ width: `41px`, height: `29px`, marginTop: `.5rem` }}
								fill="black"
							/>
						)}
					</CardImgContainer>
					{/* <CardDetailsContainer> */}
					<CardTitle>Backend</CardTitle>
					<CardStrip></CardStrip>
					<CardContent>
						<div>Nodejs</div>
						<div>Express</div>
						<div>MongoDB</div>
						<div>Rest API</div>
						<div>Postresql</div>
					</CardContent>
					{/* </CardDetailsContainer> */}
				</Card>
				<Card>
					<CardImgContainer>
						{theme === "dark" ? (
							<MdDesignServices
								style={{ width: `41px`, height: `29px`, marginTop: `.5rem` }}
								fill="white"
							/>
						) : (
							<MdDesignServices
								style={{ width: `41px`, height: `29px`, marginTop: `.5rem` }}
								fill="black"
							/>
						)}
					</CardImgContainer>
					{/* <CardDetailsContainer> */}
					<CardTitle>Design</CardTitle>
					<CardStrip></CardStrip>
					<CardContent>
						<div>Photoshop</div>
						<div>Illustrator</div>
						<div>Figma</div>
					</CardContent>
					{/* </CardDetailsContainer> */}
				</Card>
			</SkillCards>
		</Container>
	);
};

export default Skills;
