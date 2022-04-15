import React, { useContext, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImSearch } from 'react-icons/im'
import { MdShoppingBasket } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useStateValue } from '../../state/StateProvider'
import { ShowContext } from '../../SomeContext/SomeContext'
import Showup from '../Showup/Showup'
import './Header.scss'

function Header() {
    const [toggle, setToggle] = useState(true)
    const [{ basket, user }] = useStateValue();
    const navRef = useRef()

    const handleToggle = () => {
        toggle ? setToggle(false) : setToggle(true)
        navRef.current.classList.toggle('show')
    }

    const context = useContext(ShowContext);

    return (
        <div className="header">
            <div className="header__container">
                <Link to="/">
                    <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                </Link>

                <div className="header__search">
                    <input type="text" className="header__searchInput" />
                    <ImSearch className="header__searchIcon" />
                </div>

                <div className="header__nav">
                    <span className="header__navBasket">{basket?.length}</span>
                    {toggle ? <FaBars className="header__navIcon" onClick={handleToggle} /> : <FaTimes className="header__navIcon" onClick={handleToggle} />}
                    <ul ref={navRef}>
                        <li className="header__option" onClick={context.toggleAlert}>
                            <span className="header__optionUpper">{user ? 'Welcome' : 'Hello Gest'}</span>
                            <span className="header__optionLower">{user ? 'Sign Out' : 'Sign In'}</span>
                            <Showup styles={{ top: '125%', left: '-50%', transform: 'translate(-25%)' }} />
                        </li>
                        <li className="header__option">
                            <span className="header__optionUpper">Returns</span>
                            <span className="header__optionLower">& Order</span>
                        </li>
                        <li className="header__option">
                            <span className="header__optionUpper">Your</span>
                            <span className="header__optionLower">Prime</span>
                        </li>
                        <li className="header__option">
                            <Link to="/checkout" className="header__optionBasket">
                                <MdShoppingBasket className="header__basket-icon" />
                                <span className="header__optionLower header__basketCount">{basket?.length}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header__search search__mobile">
                <input type="text" className="header__searchInput" />
                <ImSearch className="header__searchIcon" />
            </div>
        </div>
    )
}

export default Header