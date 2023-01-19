import * as React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <div>
            Lyout

            <hr />
            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />
        </div>
    );
}

export default Layout;