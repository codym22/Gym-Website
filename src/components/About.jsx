import React from 'react';
import aboutimage from '../images/about.png';

function About() {

    return (

        <div id='about'>

            <div className='about-image'>

                <img src={aboutimage} alt='' />

            </div>

            <div className='about-text'>

                <h1>LEARN MORE ABOUT US</h1>

                <p>Welcome to Gym-Website, where fitness meets passion and dedication. Our mission is to empower individuals of all backgrounds to achieve their fitness goals and lead healthier lifestyles. Join us on this journey towards self-improvement, wellness, and a stronger, happier you.</p>

                <button>READ MORE</button>

            </div>

        </div>

    )


}


export default About
