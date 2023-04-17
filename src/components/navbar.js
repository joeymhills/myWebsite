import {FaBars,FaTimes} from 'react-icons/fa';

function NavBar() {
    return (
        <header>
            <img src="./pics/JMHlogo.png"></img>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">Services</a>
                <a href="/#">About</a>
                <button>
                    <FaTimes/>
                </button>
            </nav>
            <button>
                <FaBars/>
            </button>
        </header>
    )
}