import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { ThemeProvider } from "styled-components";
// import theme from "./theme/theme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* TODO */}
		{/* <ThemeProvider theme={theme}> */}
			<App />
		{/* </ThemeProvider> */}
	</React.StrictMode>
);
