import React from "react";
import Image from "next/image";
import { projects } from "../../constants/constants";
import {
	Container,
	SectionTitle,
	Line,
	CardContainer,
	CardContainerContent,
	CardTitle,
	CardDescription,
	StackEle,
	ExtButton,
	Stack,
	ProjectImg,
} from "./ProjectStyles";

const Projects = () => {
	return (
		<Container id="projects">
			<SectionTitle>Projects</SectionTitle>
			<Line></Line>
			{projects.map((item, index) => {
				<div key={index}>
					<CardContainer key={index} layout={item.id % 2 != 0 && "row-reverse"}>
						<CardContainerContent>
							<CardTitle>{item.title}</CardTitle>
							<CardDescription>{item.description}</CardDescription>
							<StackEle>Stack</StackEle>
							<Stack>
								{item.stack.map((ele, index) => (
									<StackEle key={index}>{ele}</StackEle>
								))}
							</Stack>
							{item.visit ? (
								<a target="_blank" href={item.visit} rel="noopener noreferrer">
									<ExtButton style={{ marginRight: `2.5rem` }}>Visit</ExtButton>
								</a>
							) : (
								<div></div>
							)}

							<a target="_blank" href={item.source} rel="noopener noreferrer">
								<ExtButton>Source</ExtButton>
							</a>
						</CardContainerContent>
						<ProjectImg>
							<Image
								src={item.image}
								alt="Project Img"
								width={500}
								height={500}
							/>
						</ProjectImg>
					</CardContainer>
				</div>;
			})}
		</Container>
	);
};

export default Projects;
