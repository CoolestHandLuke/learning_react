import { useState, useEffect } from "react";

const CleanupFunction = () => {
    const [value, setValue] = useState(true);
    console.log("render");
    return (
        <div>
            <h2>cleanup function</h2>
            <button className="btn" onClick={() => setValue(!value)}>
                Toggle State
            </button>
            {value && <AnotherComp />}
        </div>
    );
};

const AnotherComp = () => {
    useEffect(() => {
        const someFunc = () => {
            // here some logic
        };
        window.addEventListener("scroll", someFunc);
        return () => {
            window.removeEventListener("scroll", someFunc);
        };
    }, []);

    return <h2>Hello from Another Component!</h2>;
};

export default CleanupFunction;
