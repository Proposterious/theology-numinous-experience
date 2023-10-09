import Link from "next/link";

function Navbar() {
    return ( 
        <nav id="primary-nav" className="w-full | bg-pink-200/50 py-6"> 
            <ul className="w-full justify-center list-none flex flex-row space-x-10 | font-semibold text-xl text-teal-400">
                <li className="hover:text-green-400" id="home">
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className="hover:text-green-400" id="about">
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li className="hover:text-green-400" id="contact">
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
                <li className="hover:text-green-400" id="sources">
                    <Link href="/sources">
                        Sources
                    </Link>
                </li>
            </ul>
        </nav>
     );
}

export default Navbar;