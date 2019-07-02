import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Nav.css';

// const Div = styled.div`
//     display: flex;
// ` 

function Nav() {
    return (
        <div className='navi'>
            <div className='logos'>
                <p className='logo'>Logo</p>
            </div>
            <div className='icons'>
                <div className='icon'> <FontAwesomeIcon icon={faUser} /> 
                </div><div className='icon'> <FontAwesomeIcon icon={faShoppingCart} /> </div>   
            </div>
        </div>
    );
}

export default Nav; 
