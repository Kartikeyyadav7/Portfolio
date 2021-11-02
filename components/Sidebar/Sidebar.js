import React from "react";
import Link from "next/link";
import { Container, ItemList, Item } from "./SidebarStyles";
import { FiInstagram, FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

const Sidebar = () => {
	return (
		<Container>
			<ItemList>
				<Item>
					<Link href="" passHref>
						<FiGithub style={{ width: `20px`, height: `20px` }} />
					</Link>
				</Item>
				<Item>
					<Link href="" passHref>
						<FiTwitter style={{ width: `20px`, height: `20px` }} />
					</Link>
				</Item>
				<Item>
					<Link href="" passHref>
						<FiLinkedin style={{ width: `20px`, height: `20px` }} />
					</Link>
				</Item>
				<Item>
					<Link href="" passHref>
						<FiInstagram style={{ width: `20px`, height: `20px` }} />
					</Link>
				</Item>
			</ItemList>
		</Container>
	);
};

export default Sidebar;
