import '../stylesheets/Button_navbar.css'
import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai'

import {BsTextLeft} from 'react-icons/bs'

const Button_navbar = ({ show ,click }) =>{

    

    return(     
        <div id='btn_menu'>
            <div id="circle" onClick={show}> 
            {click && 
                    <div id="block_navbar">
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
                    </div> 
        }                          
                <div id='bar' onClick={show}>
                    {click ?  <AiOutlineClose size='24px' color='white'/> : <BsTextLeft size='25px' color='white'/>  }
               </div>
            </div>
        </div>                
    );
};

{/*
        
        

        <div id="block_navbar"  onClick={efecto} className={ boton ? 'circle_change' : 'circle_change on'}>
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
        </div>
 */}
export default Button_navbar ;