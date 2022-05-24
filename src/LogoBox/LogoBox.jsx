import React from 'react';
import KhayaalLogo from '../assets/khayaal_logo.png';
import './LogoBox.css';

export default function LogoBox() {
    return (
        <div className='logoBox'>
            <img src={KhayaalLogo} width="100%"/>
        </div>
    );
};