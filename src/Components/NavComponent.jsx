import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand, Input } from 'reactstrap'

class NavComponent extends Component {
    state = {}

    render() {
        return (
            <Navbar>
                <NavbarBrand href="#"><img className="img-brand" src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png"/></NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">TV Shows</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Movies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Recently Added</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">My List</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default NavComponent;