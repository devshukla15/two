import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import CardComponent from './CardComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LogIn from './LogIn';
import NavBar from './NavBar';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			details: {},
			isLoggedIn: false,
		};
	}

	getData = async () => {
		const { data } = await axios.get('https://randomuser.me/api/');
		console.log('response :', data);

		const details = data.results[0];

		this.setState({
			details: details,
		});
	};

	componentDidMount() {
		this.getData();
	}

	setLogin = () => {
		this.setState({
			isLoggedIn: true,
		});
	};

	setLogOut = (logOut) => {
		this.setState({
			isLoggedIn: logOut,
		});
	};

	render() {
		return (
			<>
				<div>
					<NavBar
						setLogOut={this.setLogOut}
						isLoggedIn={this.state.isLoggedIn}
						setLogin={this.setLogin}
						details={this.state.details}
					/>
					<Container fluid className="p-4  App">
						<Row>
							{this.state.isLoggedIn ? (
								<Col md={4} className="offset-md-4 mt-4">
									<CardComponent
										details={this.state.details}
										isLoggedIn={this.setLogOut}
									/>
								</Col>
							) : (
								<LogIn
									isLoggedIn={this.state.isLoggedIn}
									setLogin={this.setLogin}
								/>
							)}
						</Row>
					</Container>
					<footer class="footer">
						<img src="bg1.jpg" alt="Footer Logo" />
						<span>
							My Website
							<br />
							Copyright &copy; 2022-3022{' '}
						</span>
					</footer>
				</div>
			</>
		);
	}
}

// const App = () => {
// 	const [details, setDetails] = useState({});
// 	useEffect(() => {
// 		fetchData();
// 	}, []);
// 	const fetchData = async () => {};

// 	return (

// 	);
// };

export default App;
