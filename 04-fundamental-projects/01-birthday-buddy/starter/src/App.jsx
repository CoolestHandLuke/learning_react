import { useState } from "react";
import Person from "./Person";
import people from "./data";

const App = () => {
    const [birthdays, setBirthdays] = useState(people);
    const removeAll = () => {
        setBirthdays([]);
    };
    let numBirthdays = birthdays.length;
    return (
        <main>
            <section className="container">
                <div className="people">
                    <h3>{numBirthdays} Birthdays Today</h3>
                    {birthdays.map((birthdays) => {
                        return <Person {...birthdays} key={birthdays.id} />;
                    })}
                </div>

                <button type="button" className="btn" onClick={removeAll}>
                    Clear All
                </button>
            </section>
        </main>
    );
};
export default App;
