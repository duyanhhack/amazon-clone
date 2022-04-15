import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../fire/firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.scss'

function Signup() {
    let navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const styleToastify = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    }

    const handleSignup = (e) => {
        e.preventDefault()
        if (emailRef.current.value === "" || passwordRef.current.value === "" || passwordConfirmRef.current.value === "") {
            toast.error('Please enter...!', styleToastify)
        }

        else if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            toast.error('Wrong password...!', styleToastify)
        }

        else if (passwordRef.current.value.length < 6) {
            toast.warning('Password too short...!', styleToastify)
        }

        else {
            auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
                .then((auth) => {
                    // it successfully created a new user with
                    // email and password
                    emailRef.current.value = ""
                    passwordRef.current.value = ""
                    passwordConfirmRef.current.value = ""
                    if (auth) {
                        navigate('/')
                    }
                })
                .catch((err) => {
                    console.log(err.message)
                    if (err.message === "Firebase: The email address is already in use by another account. (auth/email-already-in-use).") {
                        toast.error('This email is already in use !', styleToastify)
                        emailRef.current.focus()
                    }

                })
        }
    }

    return (
        <div className="signup">
            <Link to="/" className="signup__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="amazon logo" />
            </Link>

            <div className="signup__container">
                <h1>Sign-up</h1>

                <form>
                    <h5>Email</h5>
                    <input type="email" ref={emailRef} />

                    <h5>Password</h5>
                    <input type="password" ref={passwordRef} />

                    <h5>Re-enter password</h5>
                    <input type="password" ref={passwordConfirmRef} />

                    <button
                        onClick={handleSignup}
                        type="submit"
                        className="signup__signinSubmit">
                        Sign Up
                    </button>
                </form>

                <p>
                    By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <Link to="/login">
                    <span className="signup__signupGoback">
                        Go back to Login page
                    </span>
                </Link>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Signup