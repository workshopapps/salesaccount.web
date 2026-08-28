import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import './Signup.css'
import {IoLogoLinkedin} from 'react-icons/io'
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'

export default function SignUp () {
    return (
        <>
            <NavigationBar />
            <div className='form__container'>
                <h3>Sign up to continue</h3>
                <div className="open__auth">
                    <div className="google">
                        <FcGoogle className='icon' />
                        <p className='google-text'>Continue with Google</p>
                    </div>
                    <div className="linkedin">
                        <IoLogoLinkedin className='icon' />
                        <p className='linkedIn-text'>Continue with LinkedIn</p>
                    </div>
                </div>
                <div className="or">
                    <hr />
                    <p>or</p>
                    <hr />
                </div>
                <form className='form'>
                    <div className="email">
                        <label htmlFor="firstname">
                            Email <br />
                            <input type="text" name="email" required /> <br />
                        </label>
                    </div>
                    <div className="password">
                        <label htmlFor='true' name="passowrd">
                            Password <br />
                            <input required type="text" />
                        </label>
                    </div>
                    <button type='button' className='signup'>Sign up</button>
                    <p className='account' href="#/">Already have an account? 
                    <a className="link" href='#/'>Login</a></p>
                </form>
            </div>
            <Footer />
        </>
    )
}