import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/default";
import GlobalStyles from "./globals";
import { useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Theme = ({ children }) => {
	// const [theme, setTheme] = useState("dark");

	// const toggleTheme = () => {
	// 	theme === "light" ? setTheme("light") : setTheme("dark");
	// };

	const [theme, setTheme] = useContext(ThemeContext);

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
