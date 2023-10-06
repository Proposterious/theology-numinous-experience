function Navbar() {
    return ( 
        <nav id="primary-nav" className="w-full | bg-teal-300 py-4"> 
            <ul className="w-full justify-center list-none flex flex-row space-x-4 | font-semibold text-lg text-black">
                <li id="home">
                    Home
                </li>
                <li id="about">
                    About
                </li>
                <li id="contact">
                    Contact
                </li>
                <li id="sources">
                    Sources
                </li>
            </ul>
        </nav>
     );
}

export default Navbar;