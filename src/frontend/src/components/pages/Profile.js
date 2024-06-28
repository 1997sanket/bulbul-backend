import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [peeps, setPeeps] = useState([]);
    const username = localStorage.getItem('username'); // Get the logged-in username

    useEffect(() => {
        fetchUserPeeps();
    }, []);

    const fetchUserPeeps = async () => {
        try {
            const response = await fetch(`http://localhost:8080/posts/author/${username}`);
            const data = await response.json();
            setPeeps(data);
        } catch (error) {
            console.error('Error fetching user peeps:', error);
        }
    };

    return (
        <main>
            <div className="container">
                <h1>{username}'s Peeps</h1>
                <ul className="list-group">
                    {peeps.map((peep) => (
                        <li key={peep.postId} className="list-group-item">
                            {peep.content}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default Profile;
