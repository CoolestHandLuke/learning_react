import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
    const [people, setPeople] = useState(data);
    function removePerson(id) {
        let newPeople = people.filter((person) => person.id != id);
        setPeople(newPeople);
    }

    return (
        <div>
            {people.map((person) => {
                const { id, name } = person;
                return (
                    <div>
                        <h2 key={id}>{name}</h2>
                        <button type="button" onClick={() => removePerson(id)}>
                            remove
                        </button>
                    </div>
                );
            })}
            <button className="btn clear-all" onClick={() => setPeople([])}>
                Clear all
            </button>
        </div>
    );
};

export default UseStateArray;
