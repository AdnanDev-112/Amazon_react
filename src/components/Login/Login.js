
import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../../context/firebaseInit';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { showLoginNoti } from '../HomeBody/Home';


function Login() {
    // Navigate 
    const navigate = useNavigate();

    // States for Input Fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Sign In Function 
    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                if (auth) {
                    navigate('/');
                    setTimeout(() => {
                        showLoginNoti();
                    }, 1000);

                }
            })
            .catch(
                error =>
                    toast.error(error.message, {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
            );
    }
    // Register Function 
    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                // On success
                if (auth) {
                    navigate('/');

                }
            })
            .catch(error =>
                toast.error(error.message, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })

            )
    }

    return (
        <>
            <div className='login'>
                <Link to='/'>
                    <img
                        className="login__logo"
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                        alt='Amazon Logo'
                    />
                </Link>

                <div className='login__container'>
                    <h1>Sign-in</h1>

                    <form>
                        <h5>E-mail</h5>
                        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                        <h5>Password</h5>
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                        <button onClick={event => signIn(event)} type='submit' className='login__signInButton'>Sign In</button>
                    </form>

                    <p>
                        By signing-in you agree to the AMAZON Clone SJI Conditions of Use & Sale.
                    </p>

                    <button onClick={event => register(event)} className='login__registerButton'>Create your Amazon Account</button>
                </div>
            </div>
            < ToastContainer />
        </>
    )
}

export default Login