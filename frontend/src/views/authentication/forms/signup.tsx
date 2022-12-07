import { useState } from 'react'
import createSignupForm from '../../../models/signup-form'

export default function Signup(props: any) {
    const [signupForm, setSignupForm] = useState(createSignupForm())
    const [page, setPage] = useState(1)

    function renderSignupForm() {
        return (
            <div className="form-container">
                <div className="form-group">
                    { renderProfilePicture() }
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
                    <label className='colour-picker' style={{ backgroundColor: signupForm.displayColour }}>
                        <small>Colour</small>
                        <input 
                            type="color" 
                            value={signupForm.displayColour}
                            onChange={e => setSignupForm({ ...signupForm, displayColour: e.target.value })}
                            hidden />
                    </label>
                </div>
    
                <footer>
                    <a href="#"  onClick={() => props.SetShowSignup(false)}>Log In</a>
                    <button className="btn-pink" onClick={() => setPage(2)}>Next</button>
                </footer>
            </div>
        )
    }

    function renderProfilePicture() {
        return signupForm.profilePicture !== ''
            ? <img className="profile-picture" src={signupForm.profilePicture} />
            : <div className="profile-picture"><p>Picture</p></div> 
    }

    function renderCookieForm() {
        return (
            <div className="form-container">
                <h1>Freetrade Authentication Cookie</h1>
                <ul>
                    <li>Log into the Freetrade <a href="https://web.freetrade.io/login" target="_blank">web interface</a></li>
                    <li>Open your browsers dev tools and find cookies</li>
                    <li>Copy and paste the value of <code>ft_web_session</code> into the text area</li>
                </ul>
    
                <textarea onChange={e => signupForm.freetradeCookie = e.target.value}></textarea>
    
                <footer>
                    <a href="#"  onClick={() => props.SetShowSignup(false)}>Log In</a>
                    
                    <div>
                        <button onClick={() => setPage(1)}>Back</button>
                        <button className="btn-pink">Sign Up</button>
                    </div>
                </footer>
            </div>
        )
    }

    return page === 1 ? renderSignupForm() : renderCookieForm()
}
