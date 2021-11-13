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
		<Container>
			<SectionTitle>Projects</SectionTitle>
			<Line></Line>
			{projects.map((item, index) => (
				<>
					<CardContainer key={index} layout={item.id % 2 != 0 && "row-reverse"}>
						<CardContainerContent>
							<CardTitle>{item.title}</CardTitle>
							<CardDescription>{item.description}</CardDescription>
							<StackEle>Stack</StackEle>
							<Stack key={index}>
								{item.stack.map((ele, index) => (
									<StackEle key={index}>{ele}</StackEle>
								))}
							</Stack>
							<ExtButton style={{ marginRight: `2.5rem` }}>Visit</ExtButton>
							<ExtButton>Source</ExtButton>
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
				</>
			))}
		</Container>
	);
};

export default Projects;
