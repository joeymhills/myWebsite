import {FaBars,FaTimes} from 'react-icons/fa';
import {useRef} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
import logo from "../pics/JMHlogo.png"
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';


function NavBar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
	<div>
		<header>
			<img src={logo} className="logo" alt=''/>
			<nav ref={navRef}>
				
				<div className='a'>
					<Link to ="/">Home</Link>
				</div>
				
				<div className='a'>
					<Link to ="/Services">Services</Link>
				</div>
				
				<div className='a'>
					<Link to ="/About">About</Link>
				</div>
				<div className='a'>
					<Link to ="/Contact">Contact</Link>
				</div>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
	</header>
		</div>
	);
}

export default NavBar;