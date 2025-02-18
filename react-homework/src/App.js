//Декларативный
import { createElement } from 'react';
import logo from './logo.svg';
import './App.css';
//Императивный
function App() {
	const year = new Date().getFullYear();
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { className: 'App-logo', src: logo, alt: 'logo' }),
			createElement(
				'p',
				null,
				'Edit',
				createElement('code', null, 'src/App.js'),
				'and save to reload.',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('div', null, year),
		),
	);
}

export default App;
