import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
export const pageLinks = [
    { id: 1, href: "#home", text: "home" },
    { id: 1, href: "#about", text: "about" },
    { id: 1, href: "#services", text: "services" },
    { id: 1, href: "#tours", text: "tours" },
];
export const socialLinks = [
    { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
    { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
    { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];
export const services = [
    {
        id: 1,
        icon: "fas fa-wallet fa-fw",
        title: "saving money",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    },
    {
        id: 2,
        icon: "fas fa-tree fa-fw",
        title: "endless hiking",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    },
    {
        id: 3,
        icon: "fas fa-socks fa-fw",
        title: "amazing comfort",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    },
];
export const tours = [
    {
        id: 1,
        image: tour1,
        date: "august 26th, 2020",
        title: "Tibet Adventure",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maximereprehenderit eum quod exercitationem fugit, quicorporis.",
        icon: "fas fa-map",
        country: "china",
        length: "6 days",
        price: "from $2100",
    },
    {
        id: 2,
        image: tour2,
        date: "october 1st, 2020",
        title: "best of java",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maximereprehenderit eum quod exercitationem fugit, quicorporis.",
        icon: "fas fa-map",
        country: "indonesia",
        length: "11 days",
        price: "from $1400",
    },
    {
        id: 3,
        image: tour3,
        date: "september 15th, 2020",
        title: "explore hong kong",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maximereprehenderit eum quod exercitationem fugit, quicorporis.",
        icon: "fas fa-map",
        country: "hong kong",
        length: "8 days",
        price: "from $5000",
    },
    {
        id: 4,
        image: tour4,
        date: "december 5th, 2020",
        title: "kenya highlights",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maximereprehenderit eum quod exercitationem fugit, quicorporis.",
        icon: "fas fa-map",
        country: "kenya",
        legnth: "20 days",
        price: "from $3300",
    },
];
