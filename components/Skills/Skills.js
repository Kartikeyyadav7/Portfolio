import React from "react";
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

const Skills = () => {
	return (
		<Container>
			<SectionTitle>Skills</SectionTitle>
			<Line></Line>
			<SkillCards>
				<Card>
					<CardImgContainer>
						<FaReact
							style={{ width: `41px`, height: `29px`, marginTop: `.5rem` }}
						/>
					</CardImgContainer>
					<CardDetailsContainer>
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
					</CardDetailsContainer>
				</Card>
				<Card>
					<CardImgContainer>
						<FaDatabase
							style={{ width: `41px`, height: `29px`, marginTop: `.5rem` }}
						/>
					</CardImgContainer>
					<CardDetailsContainer>
						<CardTitle>Backend</CardTitle>
						<CardStrip></CardStrip>
						<CardContent>
							<div>Nodejs</div>
							<div>Express</div>
							<div>MongoDB</div>
							<div>Rest API</div>
							<div>Postresql</div>
						</CardContent>
					</CardDetailsContainer>
				</Card>
				<Card>
					<CardImgContainer>
						<MdDesignServices
							style={{ width: `41px`, height: `29px`, marginTop: `.5rem` }}
						/>
					</CardImgContainer>
					<CardDetailsContainer>
						<CardTitle>Design</CardTitle>
						<CardStrip></CardStrip>
						<CardContent>
							<div>Photoshop</div>
							<div>Illustrator</div>
							<div>Figma</div>
						</CardContent>
					</CardDetailsContainer>
				</Card>
			</SkillCards>
		</Container>
	);
};

export default Skills;
