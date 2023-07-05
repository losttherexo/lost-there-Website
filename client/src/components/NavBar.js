import {useState} from 'react'
import {SlMenu} from 'react-icons/sl'
import {NavLink} from 'react-router-dom'
 
const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='text-lime-500 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
            <h1 className='w-full text-4xl font-bold'><NavLink exact to='/'>lost,there</NavLink></h1>
            <ul className='hidden md:flex text-2xl'>
                <li className='p-4'><NavLink to='/tour'>tour</NavLink></li>
                <li className='p-4'><NavLink to='/blog'>blog</NavLink></li>
                <li className='p-4'><NavLink to='/about'>about</NavLink></li>
            </ul>
            <button onClick={handleNav} className='block md:hidden'>
                <SlMenu size={20}/>
            </button>
            <div className={nav ? 'fixed left-0 top-0 w-[45%] h-full border-r border-stone-400 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full medium:text-xl text-3xl font-bold m-4'>
                    <NavLink exact to='/'>lost,there</NavLink>
                </h1>
                <ul >
                    <li className='p-4 border-b border-stone-400'>
                        <NavLink to='/tour'>tour</NavLink>
                    </li>
                    <li className='p-4 border-b border-stone-400'>
                        <NavLink to='/blog'>blog</NavLink>
                    </li>
                    <li className='p-4 border-b border-stone-400'>
                        <NavLink to='about'>about</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar