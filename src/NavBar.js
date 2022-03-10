import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const NavBar = ({ setLogOut, setLogin, isLoggedIn, details }) => {
	return (
		<Navbar bg="light">
			<Container>
				<Navbar.Brand href="App.js">
					{isLoggedIn ? (
						<div className="d-flex justify-content-center align-items-center">
							<Avatar sx={{ bgcolor: deepPurple[500], width: 36, height: 36 }}>
								{details.name?.first[0]}
							</Avatar>
							<h4>
								<span className=" ms-2 mt-4 pe-2">{details.name?.first}</span>
								<span>{details.name?.last}</span>
							</h4>
						</div>
					) : (
						'Random User API'
					)}
				</Navbar.Brand>
				{isLoggedIn ? (
					<>
						<Button color="warning" onClick={() => setLogOut()}>
							LogOut
						</Button>
					</>
				) : (
					<Button color="warning" onClick={() => setLogin()}>
						LogIn
					</Button>
				)}
			</Container>
		</Navbar>
	);
};

export default NavBar;
