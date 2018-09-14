import React,  { Component } from 'react';
import '../styles.css'

const LandingPage = (props) => {
    return(
        <div className="landingpage">
            <div className="landingnav">
                <div className="logins">
                <a href="/sign-in">Sign-In</a>
                <a href="/sign-up"> Sign-Up</a>
                </div>
            </div>
            <section className="welcome">
                <h1>Welcome to Recipe Tracker</h1>
                <div className="intro">
                <p> Recipe tracker not only allows you to keep all your favorite
                recipes in one place, it also allows you to find out the nutritional 
                content of your favorite recipes. </p>
                <p> Sign-up today to start keeping track of your favorite recipes.</p>
            </div>
            </section>
        </div>
    )
}

export default LandingPage;