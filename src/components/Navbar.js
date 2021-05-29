import React from "react";

function Navbar() {
    return (
        <nav className="display-horizontal">
            <a href="/">
                Search
            </a>
            <a href="/savedbooks">
                Saved
            </a>
        </nav>
    )
}

export default Navbar;