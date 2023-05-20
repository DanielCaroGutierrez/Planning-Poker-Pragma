import React from 'react';
import logoPragma from './assets/ficha-de-poker 1.svg'
import pragma from './assets/LogoPragma.svg'
import './App.css'

const Loading = () => {
    return (
        <section>
            <section className="landing-page">
                <section className="Logo">
                    <img src={logoPragma} alt="Icono de Pragma" />
                </section>
                <section>
                    <img src={pragma}/>
                </section>
            </section> 
        </section>
    );
};

export default Loading;