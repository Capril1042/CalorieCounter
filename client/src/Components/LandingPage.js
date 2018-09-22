import React,  { Component } from 'react';
import '../styles.css'

const LandingPage = (props) => {
    return(
        <div className="landingpage">
            <div className="landingnav">
                <div className="logins">
                    <a href="/signin">Sign-In</a>
                    <a href="/signup"> Sign-Up</a>
                </div>
            </div>
            <section className="welcome">
                <h1>Welcome to Recipe Tracker!</h1>
                <div className="intro">
                <p>Recipe tracker allows you to keep all your favorite
                recipes in one place.</p>
                <p> Sign-up today to start keeping track of your favorite recipes.</p>
            </div>
            </section>
        </div>
    )
}

export default LandingPage;