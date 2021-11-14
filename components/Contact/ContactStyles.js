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

export const StyledFormWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	margin-top: -13rem;
	margin-bottom: -10rem;
`;

export const StyledForm = styled.form`
	width: 100%;
	max-width: 700px;
`;

export const StyledInput = styled.input`
	display: block;
	width: 100%;
	background-color: ${(props) => props.theme.secondaryColor};
	height: 40px;
	border-radius: 5px;
	margin: 10px 0 20px 0;
	padding: 20px;
	border: none;
`;

export const StyledTextArea = styled.textarea`
	${"" /* background-color: #eee; */}
	background-color: ${(props) => props.theme.secondaryColor};
	width: 100%;
	min-height: 100px;
	resize: none;
	${"" /* background-color: #eee; */}
	height: 40px;
	border-radius: 5px;
	margin: 10px 0 20px 0;
	padding: 20px;
	border: none;
`;

export const StyledButton = styled.button`
	display: block;
	background-color: ${(props) => props.theme.secondaryColor};
	border-radius: 5px;
	height: 40px;
	padding: 0 20px;
	cursor: pointer;
	border: none;
`;

export const StyledError = styled.div`
	color: red;
	font-weight: 800;
	margin: 0 0 40px 0;
`;

export const ContactImg = styled.div`
	@media (max-width: 640px) {
		max-width: 37rem;
		width: 100%;
		height: auto;
		margin-top: -4rem;
		display: none;
	}
`;
