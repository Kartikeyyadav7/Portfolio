import styled from "styled-components";

export const Container = styled.div`
	margin-top: 20rem;
`;

export const SectionTitle = styled.h2`
	font-size: 3rem;
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

	@media (max-width: 640px) {
		width: 32px;
		height: 2px;
	}
`;

export const SkillCards = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 5rem;
`;

export const Card = styled.div`
	position: relative;
	background-color: ${(props) => props.theme.secondaryColor};

	max-width: 250px;
	height: 250px;
	max-height: 300px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	border-radius: 5px;

	&:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 768px) {
		width: 31%;
		height: 300px;
	}
`;

export const CardImgContainer = styled.div`
	width: 45px;
	height: 45px;
	border-radius: 100px;
	background-color: #dcdfea;
	border: 2px solid #f3f3f3;
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

export const CardTitle = styled.div`
	padding-top: 50px;
	padding-left: 10px;
	font-size: 24px;
	font-weight: 500px;
`;

export const CardStrip = styled.div`
	background-color: #2c6e9b;
	width: 24px;
	height: 2px;
	margin: 10px;
`;

export const CardContent = styled.div`
	margin: 10px;
	margin-left: 0px;
	display: flex;
	${"" /* flex-direction: column; */}
	flex-wrap: wrap;

	div {
		padding: 10px;
	}
`;
