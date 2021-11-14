import React from "react";
import { Container, ItemList, Item } from "./SidebarStyles";
import { FiInstagram, FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

const Sidebar = () => {
	return (
		<Container>
			<ItemList>
				<Item>
					<a
						target="_blank"
						href="https://github.com/Kartikeyyadav7"
						rel="noopener noreferrer"
					>
						<FiGithub style={{ width: `20px`, height: `20px` }} />
					</a>
				</Item>
				<Item>
					<a
						target="_blank"
						href="https://twitter.com/kartikey_y"
						rel="noopener noreferrer"
					>
						<FiTwitter style={{ width: `20px`, height: `20px` }} />
					</a>
				</Item>
				<Item>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/kartikeyyadav/"
						rel="noopener noreferrer"
					>
						<FiLinkedin style={{ width: `20px`, height: `20px` }} />
					</a>
				</Item>
				<Item>
					<a
						target="_blank"
						href="https://www.instagram.com/aviatecoders/"
						rel="noopener noreferrer"
					>
						<FiInstagram style={{ width: `20px`, height: `20px` }} />
					</a>
				</Item>
			</ItemList>
		</Container>
	);
};

export default Sidebar;
