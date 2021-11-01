import styled, { keyframes } from "styled-components";

export const Container = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 2rem 3rem;
`;

export const Logo = styled.div``;

export const NavLinks = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;

	@media (max-width: 768px) {
		flex-flow: column nowrap;
		background-color: #0e3964;
		position: fixed;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		top: 0;
		right: 0;
		height: 100%;
		width: 100%;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;
		align-items: center;
	}
`;

export const NavLinkItem = styled.li`
	position: relative;
	padding: 18px 10px;
	list-style: none;
	cursor: pointer;
	@media (max-width: 768px) {
		color: #fff;
	}
	&:last-child {
		padding-right: 0px;
	}
	&:before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		height: 3px;
		width: 0%;
		background: #34efdf;
		border-radius: 12px;
		transition: all 0.4s ease;
	}
	&:last-child:hover:before {
		width: 0%;
	}

	&:hover:before {
		width: 100%;
		left: 50%;
		transform: translateX(-50%);
	}
`;

export const Hamburger = styled.div`

  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none; 
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
`;

const NavbarLinkFade = keyframes`
from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;
