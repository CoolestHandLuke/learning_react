import { useState } from "react";

const UserChallenge = () => {
    const [user, setUser] = useState(null);

    const Login = () => {
        setUser({ name: "vegan food truck" });
    };

    const Logout = () => {
        setUser(null);
    };

    return (
        <div>
            {user ? (
                <div>
                    <h4>hello there, {user.name}</h4>
                    <button className="btn" onClick={() => Logout()}>
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    <h4>Please Login</h4>
                    <button className="btn" onClick={() => Login()}>
                        Login
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserChallenge;
