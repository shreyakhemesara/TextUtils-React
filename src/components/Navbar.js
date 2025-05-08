import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    const initialMode = localStorage.getItem('mode') || 'light';
    const [btntxt, setBtntxt] = useState(initialMode === 'light' ? "dark mode" : "light mode");
    const [mystyle, setMyStyle] = useState({
        color: initialMode === 'light' ? "black" : "white",
        backgroundColor: initialMode === 'light' ? "white" : "black"
    });

    const togleswritch = () => {

        if (mystyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            });
            localStorage.setItem('mode', 'dark');
            setBtntxt("light mode");
        } else {
            setBtntxt("dark mode");
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            });
            localStorage.setItem('mode', 'light');
        }
    };


    useEffect(() => {
        document.body.style.backgroundColor = mystyle.backgroundColor;
        document.body.style.color = mystyle.color;
    }, [mystyle]);
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={mystyle}>
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutus}</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="button">Search</button>
                        <button type="button" className="btn btn-success mx-1" onClick={togleswritch}>{btntxt}</button>
                    </form>
                </div>
            </nav>
        </>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutus: PropTypes.string
};

Navbar.defaultProps = {
    title: 'set title here',
    aboutus: 'what about you huh!'
};
