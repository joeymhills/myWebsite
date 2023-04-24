import '../styles/App.css';
import '../styles/navbar.css'
import headshot from '../pics/headshot.jpeg'
import coding from '../icons/coding.png'
import responsive from '../icons/responsive.png'
import animation from '../icons/animation.png'
import NavBar from '../components/NavBar.js'
import Footer from '../components/footer.js'

const Contact = () => {
    return(
        <div className='app'>
                <NavBar/>
            <div style={{paddingTop: '6em'}}>
                <h1>content</h1>
                <Footer/>
            </div>
        </div>
    );
}

export default Contact;