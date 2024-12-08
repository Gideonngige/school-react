
import React, { useState, useEffect } from 'react';
import "../styles/Home.css";
import bird from '../images/bird.jpg';
import flower from '../images/flower.jpg';

const Home = () => {
    return(
        <>
        <div className='container home-one'>
            <h2 className='header'>Welcome to G-Tech School</h2><hr/>
            <div className='row'>
                <div className='col-sm-6'>
                    <h3>About Us</h3><hr/>
                    <div className='card'>
                    <img className='image' src={bird} alt="bird"/>
                    <p>G-Tech School is a prestigious, innovative and dynamic educational institution that offers exceptional quality education and opportunities for students from all walks of life. We strive to create a platform that fosters a love for learning, continuous improvement, and the pursuit of excellence.</p>

                    </div>
                </div>
                <div className='col-sm-6'>
                    <h3>Our Mission</h3><hr/>
                    <div className='card'>
                    <img className='image' src={flower} alt="bird"/>
                    <p>To empower students to reach their full potential, to develop critical thinking skills, and to excel in their academic, professional, and personal lives. By providing a supportive and inclusive environment, we aim to inspire and motivate students to pursue their dreams and to make a lasting impact on the world.</p>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-sm-6'>
                    <h3>Our Courses</h3><hr/>
                    <div className='items'>
                        <ul>
                            <li>Mathematics</li>
                            <li>Science</li>
                            <li>C++ programming</li>
                            <li>Java programming</li>
                            <li>Game Development</li>
                            <li>Software Development</li>
                            <li>Web Development</li>
                        </ul>
                    </div>

                </div>
                <div className='col-sm-6'>
                <h3>Our Facilities</h3><hr/>
                    <div className='items'>
                        <ul>
                            <li>Computer Laboratory</li>
                            <li>Classrooms</li>
                            <li>Study Spaces</li>
                            <li>Guest Lectures</li>
                            <li>Hackathons</li>
                            <li>Outdoor Areas</li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
        </>
    );
};

export default Home;