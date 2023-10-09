import Image from "next/image";
import avatar from "../app/images/avatar.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navigation-clean">
            <div className="container">
                <a className="navbar-brand d-flex justify-content-center align-items-center" href="/">
                    <div className="sidebar-brand-icon"></div>
                    <div className="sidebar-brand-text mx-3 roadrage">MythicXGN</div>
                </a>
                <button className="btn navbar-toggler" id="open-nav-button" type="button" data-open="drawer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-list-task">
                        <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"></path>
                        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"></path>
                        <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"></path>
                    </svg>
                </button>
                <button className="btn navbar-toggler" id="close-nav-button" type="button" data-dismiss="drawer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-x-lg">
                        <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"></path>
                        <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"></path>
                    </svg>
                </button>
                <div className="collapse navbar-collapse" id="navcol-2">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item link-animation">
                            <a className="nav-link roadrage" href="/">Home</a>
                        </li>
                        <br/>
                        <li className="nav-item">
                            <a className="nav-link roadrage btn2" href="/">Login <Image src={avatar} className="rounded-circle" alt="Placeholder for the userprofile picture"/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
