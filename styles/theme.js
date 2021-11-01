import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/default";
import GlobalStyles from "./globals";
import { useState } from "react";

const Theme = ({ children }) => {
	const [theme, setTheme] = useState("light");
	const toggleTheme = () => {
		theme === "light" ? setTheme("light") : setTheme("dark");
	};

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
