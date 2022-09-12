import { useState, useEffect } from "react";
import Link from "next/link";

const Menu = () => {
    const [toggle, setToggle] = useState<boolean>(false);

    useEffect(() => {
        const element = document.getElementById("__next");
        element?.addEventListener("click", (event) => {
            const target = event.target as HTMLElement;
            if (!target.className.includes("menu")) {
                setToggle(false);
            }
        });
    }, []);

    return (
        <nav className={toggle ? "menu menu--shift" : "menu"}>
            <img
                src="/logos/menu.svg"
                alt="menu-icon"
                className="menu--image"
                onClick={() => setToggle(!toggle)}
            />
            <ul className="menu--container">
                <Link href="/">Home</Link>
                <Link href="/giveaways">Giveaways</Link>
                <Link href="/news">News</Link>
            </ul>
        </nav>
    );
};

export default Menu;
