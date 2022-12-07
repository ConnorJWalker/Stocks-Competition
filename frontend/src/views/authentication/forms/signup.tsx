import React, { useState } from 'react'
import SignupForm from '../../../models/signup-form'

export default function Signup(props: any) {
    const [signupFrom, _] = useState(new SignupForm())
    
    return (
        <div className="form-container">
            <div className="form-group">
                { renderProfilePicture(signupFrom) }
                <div className="text-input-group">
                    <input placeholder="Display Name" type="text" />
                    <input placeholder="Discord Username" type="text" />
                </div>
            </div>
            <div className="form-group">
                <div className="text-input-group">
                    <input placeholder="Password" type="password" />
                    <input placeholder="Confirm Password" type="password" />
                </div>
                <label className='colour-picker'>
                    <small>Colour</small>
                    <input type="color" hidden />
                </label>

            </div>

            <footer>
                <a href="#"  onClick={() => props.SetShowSignUp(false)}>Log In</a>
                <button className="btn-pink">Next</button>
            </footer>
        </div>
    )
}

function renderProfilePicture(signupFrom: SignupForm) {
    return signupFrom.profilePicture !== ''
        ? <img className="profile-picture" src={signupFrom.profilePicture} />
        : <div className="profile-picture"><p>Picture</p></div> 
}
