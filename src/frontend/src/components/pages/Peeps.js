import React, { useState, useEffect } from 'react';

const Peeps = () => {
    const [peeps, setPeeps] = useState([]);

    useEffect(() => {
        fetchPeeps();
    }, []);

    const fetchPeeps = async () => {
        try {
            const response = await fetch('http://localhost:8080/posts');
            const data = await response.json();
            setPeeps(data);
        } catch (error) {
            console.error('Error fetching peeps:', error);
        }
    };

    return (
        <main>
            <div className="container">
                <h1>All Peeps</h1>
                <ul className="list-group">
                    {peeps.map((peep) => (
                        <li key={peep.postId} className="list-group-item">
                            <strong>{peep.user.username}:</strong> {peep.content}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default Peeps;
