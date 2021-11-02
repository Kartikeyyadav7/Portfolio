import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	width: 40px;
	top: 265px;
	left: 40px;
	right: auto;
	z-index: 10;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const ItemList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0px;
	padding: 0px;
	list-style: none;
`;

export const Item = styled.li`
	display: inline-block;
	text-decoration: none;
	position: relative;
	cursor: pointer;
	padding: 10px;
`;
