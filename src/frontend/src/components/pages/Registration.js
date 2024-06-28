import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [passwordError, setPasswordError] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const checkPassword = () => {
        if (formData.password !== formData.confirmPassword) {
            setPasswordError('Passwords do not match');
        } else {
            setPasswordError('');
        }
    };

    const register = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            if (response.ok) {
                setResponseMessage('Registration successful!');
                navigate('/'); // Redirect to home page
            } else {
                setResponseMessage('Registration failed. Please try again.');
            }
        } catch (error) {
            setResponseMessage('Registration failed. Please try again.');
        }
    };

    return (
        <main>
            <div className="container">
                <h1>Register</h1>
                <form id="registerForm" onSubmit={register}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            autoFocus
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Id</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            onBlur={checkPassword}
                            required
                        />
                    </div>

                    {passwordError && <div className="text-danger">{passwordError}</div>}
                    <br />
                    <button id="submit-button" type="submit" className="btn btn-primary">
                        Register
                    </button>
                </form>

                <div>
                    <br />
                    <h2 id="response">{responseMessage}</h2>
                </div>
            </div>
        </main>
    );
};
