import { useState } from "react";

const ToggleChallenge = () => {
    const [showText, setShowText] = useState(true);

    return (
        <div>
            <div>
                <button className="btn" onClick={() => setShowText(!showText)}>
                    click me
                </button>
                {showText && <Alert />}
            </div>
        </div>
    );
};
const Alert = () => {
    return <div className="alert alert-danger">hello world!</div>;
};

export default ToggleChallenge;
