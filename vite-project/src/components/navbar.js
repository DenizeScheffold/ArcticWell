// Currently not functional
// @TODO: either delete this or get the required dependencies and scripts into package.json and make it work

import React from "react";
import { Link } from "react-router-dom";

const navbar = () =>{
    return (
        <div>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/map">Map</Link>
            </li>
            <li>
                <Link to="/more">More</Link>
            </li>
        </div>
    );
}
export default navbar;