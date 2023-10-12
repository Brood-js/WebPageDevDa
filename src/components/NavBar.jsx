import '../stylesheets/Navbar.css'
import devdatep_logo from '../assets/devdatep_logo.png'
import { useState } from 'react';

import Button_navbar from './Button_navbar';


const Navbar = () => {  

    const [click_b,setClick_b] = useState(false)


    const show = () =>{
        setClick_b(!click_b)
    }
    
    const [changeClass, setChangeclass] = useState(0)




    
    return(
        <>
        <header id='header'/*  onClick={show} className={click ? "c_change" : "c_change on"} */>
        <h1><img  id='devdatep_logo' src={devdatep_logo} alt="logo de devdatep" /></h1>
        <Button_navbar show={show} click={click_b}/>              
        
        </header>
        </>
    );
};

export default Navbar ;