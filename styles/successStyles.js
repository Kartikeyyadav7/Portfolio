import styled from "styled-components";

export const Container = styled.div`
	margin: 16rem auto;
	text-align: center;
	display: flex;
	flex-direction: column;
	@media (max-width: 640px) {
		margin: 7rem auto;
	}
`;

export const Button = styled.button`
	border-radius: 5px;
	background-color: ${(props) => props.theme.secondaryColor};
	margin-top: 3rem;
	text-decoration: none;
	padding: 9px 32px;
	z-index: 0;
	cursor: pointer;
	border: none;
`;
