import styled from "styled-components";

export const Container = styled.div`
	margin-top: 16rem;
	@media (max-width: 640px) {
		margin-top: 7rem;
	}
`;

export const SectionTitle = styled.h2`
	font-size: 3rem;
	${
		"" /* @media (max-width: 640px) {
		text-align: center;
	} */
	}
`;

export const Line = styled.div`
	margin-top: 2rem;
	width: 64px;
	height: 4px;
	border-radius: 10px;
	background-color: #fff;
	background: #2c6e9b;
	margin: 4rem 0;

	@media (max-width: 768px) {
		width: 48px;
		height: 4px;
	}

	${
		"" /* @media (max-width: 640px) {
		width: 32px;
		height: 2px;
		margin: 4rem auto;
	} */
	}
`;

export const CardContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: ${({ layout }) => layout || "row"};
	gap: 2rem;
	margin-bottom: 5rem;
	&:first-of-type {
		margin-top: -6rem;
	}
	@media (max-width: 640px) {
		flex-direction: column;
		row-gap: 3rem;
	}
`;

export const CardContainerContent = styled.div``;

export const CardTitle = styled.div`
	font-size: 2.75rem;
	font-weight: 700;
	margin-bottom: 1.5rem;
`;

export const CardDescription = styled.p`
	font-size: 1.75rem;

	margin-bottom: 1.5rem;
`;

export const Stack = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 0.5rem;
`;

export const StackEle = styled.div`
	font-size: 1.75rem;
	${"" /* font-weight: 700; */}
`;

export const ExtButton = styled.button`
	border-radius: 5px;
	background-color: ${(props) => props.theme.secondaryColor};
	margin-top: 3rem;
	text-decoration: none;
	padding: 9px 32px;
	z-index: 0;
	cursor: pointer;
	border: none;
`;

export const ProjectImg = styled.div`
	@media (max-width: 640px) {
		max-width: 37rem;
		width: 100%;
		height: auto;
		margin-top: -4rem;
	}
`;
