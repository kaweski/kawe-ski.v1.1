import { Link } from "react-router-dom";

function Error404() {
    return (
        <div>
            <h2>Oopsy something went wrong!!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}

export default Error404;