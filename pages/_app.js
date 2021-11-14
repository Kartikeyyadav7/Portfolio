import Theme from "../styles/theme";
import { ThemeProvider } from "../Context/ThemeContext";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Theme>
				<Component {...pageProps} />
			</Theme>
		</ThemeProvider>
	);
}

export default MyApp;
