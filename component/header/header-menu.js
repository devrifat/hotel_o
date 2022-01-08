import Link from 'next/link'
import { useState } from 'react'
function MenuOne() {
    const [menuSlide, setMenuSlide] = useState(false)
    const handelSlide = prevSlider => {
        setMenuSlide(!prevSlider)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className='menu-canvas navbar-nav  justify-content-center p-2'>
                    <button
                        className="nav-link btn"
                        onClick={(e)=>handelSlide(menuSlide)}
                    >
                        Menu
                    </button>
                </div>
            </nav>
            {
                menuSlide ? 
                <nav className="navbar navbar-dark bg-dark slider-canvas">
                    <div className='menu-canvas navbar-nav  justify-content-center p-2'>
                        <ul className="navbar-nav justify-content-center p-2">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/login">
                                    <a className="nav-link">Login</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/singup">
                                    <a className="nav-link">Singup</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#_">
                                    <a className="nav-link">Logout</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/login">
                                    <a className="nav-link">Login</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/blog">
                                    <a className="nav-link">blog</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/hotel-search">
                                    <a className="nav-link">hotel search</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/install">
                                    <a className="nav-link">shopify api</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/token">
                                    <a className="nav-link">Token api</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav> : null
            }
        </>
    )
  }
  
  export default MenuOne