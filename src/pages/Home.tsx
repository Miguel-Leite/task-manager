import { NavLink } from 'react-router-dom'

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

                        <NavLink to='/' className='auth'>
                            Sign In        
                        </NavLink>
                    </nav>
                </div>
            </header>
        </div>
    )
}