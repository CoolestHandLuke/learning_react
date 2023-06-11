import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
    return (
        <section className="bookList">
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};

const Book = () => {
    const title = "Spider-Man: Across the Spider-Verse: The Art of the Movie";
    const author = "Ramin Zahed";
    return (
        <article className="book">
            <img
                src="https://images-na.ssl-images-amazon.com/images/I/818LCPpmyWL._AC_UL900_SR900,600_.jpg"
                alt="Spider-Man"
            />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
