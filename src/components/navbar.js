import {FaBars,FaTimes} from 'react-icons/fa';
import {useRef} from 'react'
import React from 'react'
import '../styles/navbar.css'
import logo from "../pics/JMHlogo.png"

function NavBar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src={logo} className="logo" alt=''/>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Services</a>
				<a href="/#">About</a>
                <a href="/#">Contact</a>

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
	);
}

export default NavBar;