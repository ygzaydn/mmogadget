import { useState } from "react";

const Menu = () => {
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <nav className={toggle ? "menu menu--shift" : "menu"}>
            <img
                src="/logos/menu.svg"
                alt="menu-icon"
                onClick={() => setToggle(!toggle)}
            />
            <ul className="menu--container">
                <li>Home</li>
                <li>Giveaways</li>
                <li>News</li>
            </ul>
        </nav>
    );
};

export default Menu;
