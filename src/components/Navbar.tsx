import React from 'react'


import logo1 from '../assets/img/img2.png';
import logo2 from '../assets/img/img3.png';
import logo3 from '../assets/img/img4.png';


interface INavBarProps {

}


const Navbar: React.FC<INavBarProps> = () => {
    return (
        <nav>
            <div className="logo1">
                <img src={logo1} alt="dsds" />
            </div>
            <ul className="nav-link">
                <li>
                    <button>
                        <img src={logo3} alt="" />
                        6 CONNECTED
                    </button>
                </li>
                <li>
                    <button>
                        <img src={logo2} alt="" />
                        LOGOUT
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar