import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

import {Link} from 'react-router-dom'
import './navbar.scss'
import logo from '../../assets/Logo/icon-left-font-monochrome-white.svg';

const navbar = () => {
    const Logout = () => {
        Swal.fire({
            title: "Êtes-vous sûr(e) ?",
            text: "Une fois déconnecté(e), vous ne pourrez plus accéder au forum",
            icon: "warning",
            showDenyButton: true,
            confirmButtonText: "Me déconnecter",
            denyButtonText: "Annuler",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                return (window.location.href = "/");
            }
        });
    }

    return (
        <div className="">
            <Navbar sticky="top" bg="dark" variant="dark" className="navbar">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="my-2 my-lg-0 d-flex justify-content-between"
                    style={{ maxHeight: '100px', width: '100%' }}
                    navbarScroll
                    >
                        <Link className="" to="/post">
                            <img src={logo} alt="logo" className="logo h-100" />
                        </Link>

                        <Link to="/post" className="nav-link my-auto">
                            Forum
                        </Link>
                        <Link to={"/profile"} className="nav-link my-auto">
                            Mon profil
                        </Link>
    
                        <FontAwesomeIcon
                        icon={faSignInAlt}
                        className="nav-icon my-auto"
                        onClick={Logout}
                        />
                    </Nav>
                </Navbar.Collapse>

            </Navbar> 
        </div>
    );
};

export default navbar;