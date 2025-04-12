import React from "react";
 
function Header({ name }) {
    return (
        <header>
            <h1>{name || "Default Blog Name"}</h1>
        </header>
    );
}

export default Header;