import { NavLink } from "react-router-dom";

const NavItem = ({ text }: { text: string }) => (
        <li className="hover:text-purple-300 transition underline hover:decoration-dashed" >
            {text}
        </li>
)


const Navbar = () => {
    return (
        <nav className="w-full bg-slate-200/10 ">
            <ul className='flex text-xl items-center justify-center gap-20 font-bold shadow-md h-20'>
                <NavLink to='/exercise1'>
                    <NavItem text="Exercise 1" />
                </NavLink>
                <NavLink to='/exercise2'>
                    <NavItem text="Exercise 2"/>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Navbar;