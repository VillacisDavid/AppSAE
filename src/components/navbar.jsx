function Navbar() {
    return(
        <div className="navbar bg-base-100 border-b-2 border-neutral">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div> 
            <div className="flex-1">
                <a className="m-3 text-xl">SAE</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li>
                    <a>?</a>
                </li>
                <li>
                    <details>
                    <summary>
                        Usr
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                        <li><a>Ver perfil</a></li>
                        <li><a>Cerrar sesión</a></li>
                    </ul>
                    </details>
                </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;