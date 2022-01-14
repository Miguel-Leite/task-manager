import { NavLink } from 'react-router-dom'

import Hero from '../assets/hero.png'

export function Home () {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <nav className='nav'>
                        <a href="#" className="brand">
                            <span>TASK</span>Manager
                        </a>

                        <ul>
                            <li> <NavLink to='/'> About us </NavLink> </li>
                            <li> <NavLink to='/'> Cases </NavLink> </li>
                            <li> <NavLink to='/'> Resources </NavLink> </li>
                        </ul>

                        <NavLink to='/auth' className='auth-btn'>
                            Sign In        
                        </NavLink>
                    </nav>
                    <div className="content-hero">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1>
                                    <span> Creative Digital </span>Design Agency
                                    is looking for new talent
                                </h1>
                                <p> Creative Digital Design Agency
                                    is looking for new talent </p>
                                <NavLink to='/' className="btn-hero"> Get started </NavLink>
                            </div>
                            <div className="col-lg-6">
                                <img src={Hero} className="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </div>
    )
}