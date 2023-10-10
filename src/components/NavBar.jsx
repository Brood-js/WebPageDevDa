import '../stylesheets/Navbar.css'
import devdatep_logo from '../assets/devdatep_logo.png'
import { useState } from 'react';
import vector_button from '../assets/vector.png'


const Navbar = ({ apeear }) => {
    
    const [click,setClick] = useState(0)

    /* const x =() =>{
        click = true
        setClick = console.log(!click)
    } */

   

    return(
        <>
        <header id='header'>
        <h1><img  id='devdatep_logo' src={devdatep_logo} alt="logo de devdatep" /></h1>
        <div id="btn_menu">
            <div id="circle" onClick={apeear}>
                <div id='bar'>
                    <img  id='vector' src={vector_button} alt="vector-button" />
                </div>


            </div>
        </div>
       {/*  <div id="block_navbar">
            <div id="center">
                <ul>
                    <li>Inicio</li>
                    <li>Servicio</li>
                    <li>Nosotros</li>
                    <li>Portafolio</li>
                    <li>Actualidad</li>
                    <li>Zona de cliente</li>
                </ul>
            </div>
        
        </div> */}
        </header>
        </>
    );
};

export default Navbar ;