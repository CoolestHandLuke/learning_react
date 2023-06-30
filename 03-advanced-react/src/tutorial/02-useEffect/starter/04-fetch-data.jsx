import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(url);
                const users = await resp.json();
                console.log(users);
                setUsers(users);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <section>
            <h3>Github Users</h3>
            <ul className="users">
                {users.map((user) => {
                    const {
                        avatar_url: image,
                        login: name,
                        url: link,
                        id,
                    } = user;
                    return (
                        <li key={id}>
                            <img src={image} alt={name} className="img" />

                            <div>
                                <h5>{name}</h5>
                                <a href={link}>Profile</a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
export default FetchData;
