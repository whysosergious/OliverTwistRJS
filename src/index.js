import React from 'react';
import ReactDOM from 'react-dom';
import './fonts.css';
import './typography.css';
import './index.css';
import './mediaQueries.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// contexts
import { StateProvider } from 'logic/kernel'

ReactDOM.render(
	<React.StrictMode>
		<StateProvider>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
