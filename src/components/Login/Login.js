import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../fire/firebase'
import { ToastContainer, toast } from 'react-toastify';
import './Login.scss'

function Login() {
    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const styleToastify = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    }

    const handleSignin = (e) => {
        e.preventDefault()
        if (email === "" || password === "") {
            toast.error('Please enter email & password!', styleToastify)
            return false
        }
        else {
            auth.signInWithEmailAndPassword(email, password)
                .then(auth => {
                    navigate('/')
                })
                .catch(err => {
                    toast.error('Email or password is invalid', styleToastify)
                })
            return true
        }
    }

    return (
        <div className="login">
            <Link to="/" className="login__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="amazon logo" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button
                        type="submit"
                        onClick={handleSignin}
                        className="login__signinBtn">
                        Sign In
                    </button>
                </form>

                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <Link to="/signup">
                    <span className="login__signupBtn">
                        Create your Amazon Account
                    </span>
                </Link>

                <ToastContainer />
            </div>
        </div>
    )
}

export default Login

//3:56:39