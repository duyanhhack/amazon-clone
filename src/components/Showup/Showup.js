import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShowContext } from '../../SomeContext/SomeContext'
import { useStateValue } from '../../state/StateProvider'
import { auth } from '../../fire/firebase'
import './Showup.scss'

function Showup({ styles }) {
    const [{ user }] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    const context = useContext(ShowContext)

    return (
        <div className={`showup ${context.alert}`} style={styles}>
            <p>{user ? `Welcome ${user.email}` : "You're not Signin"}</p>
            {!user && <Link to="/login" className="showup__button">Login</Link>}
            {user && <button className="showup__button" onClick={handleAuthentication}>Logout</button>}
        </div>
    )
}

export default Showup