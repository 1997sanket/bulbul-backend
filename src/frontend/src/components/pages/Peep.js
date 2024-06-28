import React, { useState } from 'react';

const Peep = () => {
    const [content, setContent] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const username = localStorage.getItem('username'); // Get the logged-in username

    const handleChange = (e) => {
        setContent(e.target.value);
    };

    const createPeep = async (e) => {
        e.preventDefault();
        if (content.trim() === '') return;

        try {
            const response = await fetch(`http://localhost:8080/posts/${username}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content }),
            });

            if (response.ok) {
                setContent('');
                setSuccessMessage('Peep created successfully!');
                setErrorMessage('');
            } else {
                const errorText = await response.text();
                setErrorMessage(errorText);
                setSuccessMessage('');
            }
        } catch (error) {
            setErrorMessage('Error creating peep. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <main>
            <div className="container">
                <h1>Peep !!!</h1>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={createPeep}>
                            <div className="form-group">
                                <label htmlFor="peepText">Create Peep</label>
                                <textarea
                                    className="form-control"
                                    id="content"
                                    name="peepText"
                                    rows="4"
                                    value={content}
                                    onChange={handleChange}
                                    required
                                    autoFocus
                                ></textarea>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary">Peep</button>
                        </form>
                        {successMessage && <div className="text-success"><h3>{successMessage}</h3></div>}
                        {errorMessage && <div className="text-danger"><h3>{errorMessage}</h3></div>}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Peep;
