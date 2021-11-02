import styled, { keyframes } from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 640px) {
		flex-direction: column-reverse;
		row-gap: 3rem;
	}
`;

export const HeroText = styled.div``;

export const HeroImg = styled.div`
	@media (max-width: 640px) {
		max-width: 37rem;
		width: 100%;
		height: auto;
		margin-top: -4rem;
	}
`;

export const HeadlineBanner = styled.div`
	text-transform: uppercase;
	letter-spacing: 0.8rem;
	padding: 1rem;
	border-radius: 5px;
	margin-right: 4rem;
	text-align: center;

	background-color: ${(props) => props.theme.secondaryColor};

	@media (max-width: 768px) {
		letter-spacing: 0.2rem;
		margin-right: 10rem;
		text-align: center;
	}

	@media (max-width: 640px) {
		text-align: center;
		letter-spacing: 0.75rem;
		margin-right: 0rem;
		line-height: 2rem;
	}
`;

export const HeaderMainText = styled.h1`
	font-size: 5rem;
	margin: 0.3em 0;
	@media (max-width: 640px) {
		text-align: center;
		font-size: 4rem;
	}
`;

export const HeaderSubText = styled.div`
	font-size: 2rem;
	@media (max-width: 640px) {
		text-align: center;
	}
`;

export const Button = styled.div`
	@media (max-width: 640px) {
		display: flex;
		justify-content: center;
	}
`;

export const CTAButton = styled.button`
	border-radius: 5px;
	border: 1px solid ${(props) => props.theme.text};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 3rem;
	overflow: hidden;
	position: relative;
	text-decoration: none;
	transition: 0.2s transform ease-in-out;
	z-index: 0;
	cursor: pointer;

	&::after {
		background-color: ${(props) => props.theme.secondaryColor};
		border-radius: 5px;
		content: "";
		display: block;
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		transform: translate(-100%, 0) rotate(10deg);
		transform-origin: top left;
		transition: 0.2s transform ease-out;
		will-change: transform;
		z-index: -1;
	}

	&:hover::after {
		transform: translate(0, 0);
	}

	&:hover {
		border: 1px solid transparent;
		color: ${(props) => props.theme.text};
		transform: scale(1.05);
		will-change: transform;
	}

	@media (max-width: 640px) {
		margin: 1em;
	}
`;

export const ScrollDown = styled.div`
	position: absolute;
	bottom: 5rem;
	left: 17%;
	transform: translateX(-20%);
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 1100px) {
		left: 11.5rem;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

const moveDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-1rem);
  }
  100% {
    opacity: 1;
    transform: translateY(1rem);
  }
`;

export const Mouse = styled.div`
	width: 2.5rem;
	height: 5rem;
	border: 1px solid ${(props) => props.theme.text};
	border-radius: 2rem;
	margin-bottom: 0.5rem;
	display: flex;

	span {
		width: 1rem;
		height: 1rem;
		background-color: ${(props) => props.theme.text};
		display: block;
		border-radius: 50%;
		margin: auto;
		animation: ${moveDown} 2s linear infinite;
	}
`;

const arrowDown = keyframes`
	0% {
    opacity: 0;
  	}

	25% {
    opacity: 0.25;  
  	}

	50% {
    opacity: 0.5;
    }

	75% {
    opacity: 0.75; 
    }

	100% {
    opacity: 1;
    }
`;

export const Arrow = styled.div`
	span {
		display: block;
		width: 1rem;
		height: 1rem;
		border: 1px solid transparent;
		border-right-color: ${(props) => props.theme.text};
		border-bottom-color: ${(props) => props.theme.text};
		transform: rotate(45deg);
		animation: ${arrowDown} 1s alternate infinite;
	}
`;
