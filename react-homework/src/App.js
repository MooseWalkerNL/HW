//Декларативный
import logo from './logo.svg';
import './App.css';
//Императивный
function App() {
	const year = new Date().getFullYear();

	return (
		//Декларативный
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<div>{year}</div>
			</header>
		</div>
	);
}

export default App;
