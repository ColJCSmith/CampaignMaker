import React from "react";
import { Link } from "react-router-dom"

function Button(props) {
    return (
        <Link to='/form'>
            <button class="w3-button w3-padding-large w3-light-grey center" position="relative" href="App.js">BUILD MY CAMPAIGN</button>
        </Link>
    )
}

export default Button;