import React from "react";
import {FaHome, FaUserAlt, FaSignInAlt} from 'react-icons/fa'
import { Nav } from "./styled";
export default function Header() {
    return (
        <Nav>

            <a to="/login"><FaHome size={24}/></a>
            <a to="/login"><FaSignInAlt size={24}/></a>
            <a to="/login"><FaUserAlt size={24}/></a>
            
        </Nav>)
}