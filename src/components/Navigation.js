import React from "react";
import { Link, Outlet } from "react-router-dom";

import Logo from "../images/logo.svg";

function Navigation() {


/*     const [value, setValue] = useState(0);

    const handleChange = (e, val) => {
        setValue(val);
    }; */

    return (
        <div>
            <nav>
                <ul /* value={value} onChange={handleChange} */ >
                    <input type="image" src={Logo} id="logo" alt="logo" to="home" />
                    <li>
                        <Link to="about">about</Link>
                    </li>
                    <li>
                        <Link to="projects">projects</Link>
                    </li>
                    <li>
                        <Link to="contact">contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
};

export default Navigation;