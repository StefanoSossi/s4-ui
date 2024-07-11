import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/state/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import SnackbarComponent from "./components/Snackbar/snackbar.component.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<Router>
			<App />
			<SnackbarComponent />
		</Router>
	</Provider>
);

