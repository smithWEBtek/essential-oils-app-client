import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <div>
        <Nav tabs>
        <NavItem>
            <NavLink tag={ Link } to="/" active>Home</NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={ Link } to="/oils">Oils</NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={ Link } to="/oils/new">Add New Oil</NavLink>
        </NavItem>
        <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
        </Nav>
    </div>
)

export default Navbar;