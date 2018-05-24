import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand, NavItem, NavLink, Button} from 'mdbreact'

class App extends Component {
    render() {
        return (
            <div className="App">

                    <Navbar color="black" className="navbar-ht">
                        <NavbarBrand tag="span">
                            <img src="http://gatortraxboats.com/wp-content/uploads/2016/11/mudbuddy.png"
                                 alt="Mudbuddy Logo" className="logo"/>
                        </NavbarBrand>
                        <Button color="grey" size='sm'>Home</Button>
                        <Button color="grey" size='sm'>Dealers</Button>
                        <Button color="grey" size='sm'>Motors</Button>
                        <Button color="grey" size='sm'>Support/Parts</Button>
                        <Button color="grey" size='sm'>Contact</Button>
                    </Navbar>

                        <div>
                            <iframe
                                src="https://www.youtube.com/embed/J22sBd7LgGY?rel=0&amp;showinfo=0&autoplay=1&loop=1"
                                allow="autoplay; encrypted-media">
                            </iframe>
                        </div>

            </div>
    );
    }
    }

    export default App;
