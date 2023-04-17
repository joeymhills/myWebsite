import React from 'react'
import {FaPhone} from 'react-icons/fa';
import {MdOutlineMailOutline} from 'react-icons/md'

const Footer = () => {
    return(
    <footer className="footer">
        <div className='footerList'>
            <h3 className='footerItems'><FaPhone/> : 203-361-8525</h3>
            <h3 className='footerItems'><MdOutlineMailOutline/> : Joeymhills@gmail.com</h3>
            <h3 className='footerItems'>&#169;Copyright 2023</h3>
        </div>
    </footer>
    );
}
export default Footer;