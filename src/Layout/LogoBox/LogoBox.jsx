import React from 'react';
import KhayaalLogo from '../../assets/Logo/khayaal_logo.png';
import './LogoBox.css';

export default function LogoBox() {
    return (
        <div className='logoBox'>
            <img src={KhayaalLogo} width="70%" alt="logo"/>
        </div>
    );
};