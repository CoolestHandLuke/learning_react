import { useState } from "react";

const UseStateBasics = () => {
    // const value = useState("hello")[0];
    // const func = useState("hello")[1];
    // console.log(value);
    // console.log(func);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        console.log(count);
    };
    return (
        <div>
            <h4>You clicked the button {count} times.</h4>
            <button onClick={handleClick} type="button" className="btn">
                Increase
            </button>
        </div>
    );
};

export default UseStateBasics;
