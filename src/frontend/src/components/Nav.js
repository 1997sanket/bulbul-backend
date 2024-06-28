import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('username'));


    // Used this to change the nav bar accordingly when user is logged in
    useEffect(() => {
        const handleLoginStateChange = () => {
            setIsLoggedIn(!!localStorage.getItem('username'));
        };

        window.addEventListener('loginStateChanged', handleLoginStateChange);

        return () => {
            window.removeEventListener('loginStateChanged', handleLoginStateChange);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('username');
        setIsLoggedIn(false);
        window.dispatchEvent(new Event('loginStateChanged'));
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={`${process.env.PUBLIC_URL}/images/favicon.png`} alt="Peep logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {!isLoggedIn && (
                                <>
                                    <li id="register-link" className="nav-item">
                                        <Link className="nav-link" to="/register">Registration</Link>
                                    </li>
                                    <li id="login-link" className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                </>
                            )}
                            {isLoggedIn && (
                                <>
                                    <li id="peep-link" className="nav-item">
                                        <Link className="nav-link" to="/peep">Peep</Link>
                                    </li>
                                    <li id="peeps-link" className="nav-item">
                                        <Link className="nav-link" to="/peeps">Peeps</Link>
                                    </li>
                                    <li id="profile-link" className="nav-item">
                                        <Link className="nav-link" to="/profile">Profile</Link>
                                    </li>
                                    <li id="logout-link" className="nav-item">
                                        <Link className="nav-link" to="/" onClick={handleLogout}>Logout</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
