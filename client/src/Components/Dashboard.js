import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
    let user =props.user.login
    return(
        <section className="userdash">
            <div className="dashwelcome">
                <h2>Welcome to Recipe Tracker!</h2>
                    <div className="boxesnav">
                        <button className="navbox">
                            <Link to="/recipes">
                                View All Recipes
                            </Link>
                        </button>
                        <button className="navbox">
                            <Link to="/user/user-recipes">
                                View your Recipes
                            </Link>
                        </button>
                    </div>
                <div>
                    You are logged in as {user.username} 
                </div>
                <div>
                    Your Email is set as: 
                        {user.email}
                </div>
                <p>
                    If this is not you please&nbsp;
                        <Link to="/user/logout">
                            logout!
                        </Link> 
                </p>
            </div>
        </section>
    )
}

export default Dashboard;