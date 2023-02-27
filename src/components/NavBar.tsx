import { useState } from 'react'
import { ReactComponent as Logo} from '../assets/svg/totoro-96.svg'
import { ReactComponent as IconOpenMenu } from '../assets/svg/icon-open-menu.svg'
import { ReactComponent as IconCloseMenu } from '../assets/svg/icon-close-menu.svg'

export const NavBar = () => {

    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    const menuOpenStyle = 'hidden md:flex'
    const menuCloseStyle = 'flex '

  return (
    <div className="bg-[#ffe082] h-screen">
        <header className="bg-white">
            <nav className="flex justify-between items-center w-[92%]  mx-auto"     >
                <div>
                    <Logo
                    className="w-16 cursor-pointer opacity-100 hover:opacity-90"
                    />
                </div>
                <div className={`${mobileNavOpen ? menuCloseStyle : menuOpenStyle}`}>
                    <ul className='absolute md:static w-full flex flex-col md:flex-row md:items-center gap-8 md:gap-[4vw] bg-white left-0 top-[95px] text-center py-10'>
                        <li>
                            <a className="hover:text-gray-500" href="#">Products</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Solution</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Resource</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Developers</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <button className="bg-[#ffe082] text-black hover:text-white px-5 py-2 rounded-full hover:bg-[#616161]">Sign in</button>
                        <div
                        className='md:hidden ml-auto cursor-pointer z-30'
                        onClick={() => setMobileNavOpen(!mobileNavOpen)}
                        >
                        {mobileNavOpen ? <IconCloseMenu/> : <IconOpenMenu/>}
                        </div>
                </div>
            </nav>   
        </header>
    </div>
            
  )
}
