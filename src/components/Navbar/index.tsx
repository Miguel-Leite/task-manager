import { NavLink } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";
import { IoDuplicateOutline } from "react-icons/io5";

import '../../styles/navbar.scss'

export const Navbar = () => {
    return (
        <nav className="nav">
            <div className="controls">
                <FiAlignJustify className='menu'/>
                <NavLink to='/' className='add'>
                    <IoDuplicateOutline />
                    Add Task
                </NavLink>
            </div>

            <div className="profile">
                <h5> Miguel Leite </h5>
                <NavLink to='/'> My account </NavLink>
            </div>
        </nav>
    )
}