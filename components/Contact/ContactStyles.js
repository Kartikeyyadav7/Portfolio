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
