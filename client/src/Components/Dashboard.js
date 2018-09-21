import React,  { Component } from 'react';

const Dashboard = (props) => {
    let user =props.user.login
    return(
        <div>
        <div><span>Name:</span> {user.name}</div>
                <div><span>Username:</span> {user.username}</div>
                <div><span>Email:</span> {user.email}</div></div>
    )
}

export default Dashboard;