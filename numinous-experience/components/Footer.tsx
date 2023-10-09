function Footer() {
    return ( 
        <div id="footer" className="w-full py-8 | items-center | bg-purple-500">
            <p className="w-fit mx-auto text-center text-xl font-bold text-purple-900">
                Numinous Experience Website <br />by {' '}
                <span className="bg-gradient-to-r from-green-400 from-40% to-teal-300 to-90% bg-clip-text text-transparent decoration-green-800 hover:underline">
                    <a href="https://github.com/Proposterious/">
                     Maddox Harper
                    </a>
                </span>
            </p>
        </div>
     );
}

export default Footer;