import '../styles/App.css';
import '../styles/navbar.css'
import headshot from '../pics/headshot.jpeg'
import coding from '../icons/coding.png'
import responsive from '../icons/responsive.png'
import animation from '../icons/animation.png'
import NavBar from '../components/NavBar.js'
import Footer from '../components/footer.js'

const About = () => {
  return (
    <div className="app">
      <head>
        <link rel="stylesheet" type="text/css" href="style.css" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" 
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" 
        crossorigin="anonymous" referrerpolicy="no-referrer" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
        crossorigin="anonymous" referrerpolicy="no-referrer" />
  
        <title>JMH Web Design</title>

      </head>
    
      <NavBar/>
        <div className="about-page" style={{paddingTop: '6em'}}>
            <div className="about-heading">
            <h1>About</h1>
            </div>
            <img src={headshot} className="headshot" alt = " " />
            <div className='about-heading'>
            <h2>Who am I?</h2>
            </div>
            <p className="about-p">
            I'm Joey Hills, a full-stack web developer from Milford, Connecticut. I specialize in working with businesses
            to make fast, responsive, and professional websites.
            </p>
            <p className="about-p">
                I'm proficient in HTML, CSS, JavaScript, and Python, along with
            popular frameworks these languages use such as React and Django.
            </p>
        </div>
        <Footer/>
        </div>
  );
}


export default About;