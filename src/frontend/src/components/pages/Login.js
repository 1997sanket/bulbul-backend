import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const login = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password,
                }),
            });

            if (response.ok) {
                localStorage.setItem('username', formData.username);
                window.dispatchEvent(new Event('loginStateChanged')); // Dispatch custom event

                navigate('/peep'); // Redirect to peep page
            } else {
                const errorText = await response.text();
                setErrorMessage(errorText);
            }
        } catch (error) {
            setErrorMessage('Login failed. Please try again.');
        }
    };

    return (
        <main>
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={login}>
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
                        <label htmlFor="password">Password</label>
                        <input 
                            id="password" 
                            type="password" 
                            className="form-control" 
                            value={formData.password} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                {errorMessage && <div className="text-danger"><h3>{errorMessage}</h3></div>}
            </div>
        </main>
    );
};
