#!/bin/node
import React from "react";

function NavBar(props) {
    const listItems = <li><a href={""}>{props.navBar.name}</a></li>
    return <>
        <ul>{listItems}</ul>
    </>
};

module.exports = NavBar;