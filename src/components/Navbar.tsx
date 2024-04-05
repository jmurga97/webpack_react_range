import { NavLink } from "react-router-dom";

const NavItem = ({ text }: { text: string }) => (
        <li className="underline hover:decoration-dashed" >
            {text}
        </li>
)


const Navbar = () => {
    return (
        <nav className="w-full">
        <ul className='flex text-xl items-center justify-center gap-20 font-bold text-purple-4 shadow-md h-20'>
            <NavLink to='/exercise1' className="hover:text-purple-4">
                <NavItem text="Exercise 1" />
            </NavLink>
            <NavLink to='exercise2'>
                <NavItem text="Exercise 2"/>
            </NavLink>
        </ul>
    </nav>
    )
}

export default Navbar;