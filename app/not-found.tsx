import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <h1>404 not found!</h1>
            <p>
                Go back to <Link href="/">Hompage</Link>
            </p>
        </>
    );
};

export default NotFound;
