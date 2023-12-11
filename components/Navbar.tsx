import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <h1>Hoang The Toan</h1>
                </div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/dashboard">Dashboard</Link>
            </nav>
        </>
    );
};

export default Navbar;
