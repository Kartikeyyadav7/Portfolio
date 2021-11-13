import styled from "styled-components";

export const Container = styled.div`
	max-width: 1100px;
	width: 100%;
	margin: 14rem auto;
	padding: 0 4rem;

	@media (max-width: 1250px) {
		padding: 0 11rem;
	}

	@media (max-width: 768px) {
		padding: 0 4rem;
	}
`;
