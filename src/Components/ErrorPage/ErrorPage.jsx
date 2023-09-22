import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>OOOpps!!</h1>
            <Link to="/" className="btn">Go back</Link>
        </div>
    );
};

export default ErrorPage;