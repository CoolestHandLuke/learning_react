import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
    title: "Spider-Man: Across the Spider-Verse: The Art of the Movie",
    author: "Ramin Zahed",
    img: "./images/book-1.jpg",
};

const secondBook = {
    title: "Democracy Awakening: Notes on the State of America",
    author: "Heather Cox Richardson",
    img: "./images/book-2.jpg",
};

const BookList = () => {
    return (
        <section className="bookList">
            <Book
                author={firstBook.author}
                title={firstBook.title}
                img={firstBook.img}
            />
            <Book
                author={secondBook.author}
                title={secondBook.title}
                img={secondBook.img}
            />
        </section>
    );
};

const Book = (props) => {
    const { img, title, author } = props;
    console.log(props);
    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
