import styled from "styled-components";

export const Container = styled.div`
	margin-top: 20rem;
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

export const SkillCards = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 4.5rem;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 0 230px;
	max-width: 310px;
	position: relative;
	background-color: ${(props) => props.theme.secondaryColor};
	color: #000000;
	border-radius: 5px;
	box-shadow: 3px 2px 14px rgba(255, 255, 255, 0.2);
	text-decoration: none;
	font-size: 1rem;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	padding: 1.5rem;
	transition: 0.3s;

	&:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
`;

export const CardImgContainer = styled.div`
	width: 45px;
	height: 45px;
	border-radius: 100px;
	background-color: ${(props) => props.theme.secondaryColor};
	border: 2px solid ${(props) => props.theme.background};
	position: absolute;
	top: -10px;
	left: 10px;
`;

export const CardImg = styled.div`
	width: 2rem;
	height: 2rem;
`;

export const CardDetailsContainer = styled.div`
	margin: 10px;
`;

export const CardTitle = styled.h2`
	font-size: 2.75rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
	margin-top: 3rem;
`;

export const CardStrip = styled.div`
	background-color: #2c6e9b;
	width: 24px;
	height: 2px;
	margin-left: 0;
	margin-right: 10px;
	margin-top: 10px;
	margin-bottom: 10px;
`;

export const CardContent = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 1rem;
	gap: 1.5rem;
	font-size: 1.7rem;
	div {
		color: ${(props) => props.theme.text};
	}
`;
