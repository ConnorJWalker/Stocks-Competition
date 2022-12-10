import { useState } from 'react'
import createSignupForm from '../../../models/signup-form'

export default function Signup(props: any) {
    const [signupForm, setSignupForm] = useState(createSignupForm())
    const [page, setPage] = useState(1)

    function renderSignupForm() {
        return (
            <>            
                <div className="form-container">
                    <h1>Sign Up</h1>
                    <div className="form-group">
                        { renderProfilePicture() }
                        <div className="text-input-group">
                            <input 
                                placeholder="Display Name"
                                type="text"
                                value={signupForm.displayName}
                                onChange={e => setSignupForm({ ...signupForm, displayName: e.target.value })} />
                            <input 
                                placeholder="Discord Username"
                                type="text"
                                value={signupForm.discordUsername}
                                onChange={e => setSignupForm({ ...signupForm, discordUsername: e.target.value })} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="text-input-group">
                            <input 
                                placeholder="Password"
                                type="password"
                                value={signupForm.password}
                                onChange={e => setSignupForm({ ...signupForm, password: e.target.value })} />
                            <input 
                                placeholder="Confirm Password"
                                type="password"
                                value={signupForm.passwordConfirm}
                                onChange={e => setSignupForm({ ...signupForm, passwordConfirm: e.target.value })} />
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
                        <button className='link' onClick={() => props.SetShowSignup(false)}>Log In</button>
                        <button className="btn-pink" onClick={nextButtonClick}>Next</button>
                    </footer>
                </div>

                { renderValidation() }
            </>
        )
    }

    function renderValidation() {
        if (signupForm.errors.length !== 0) return (
            <div className="validation-errors">
                <h2>Validation Errors</h2>
                <ul>
                    { signupForm.errors.map((error, index) => <li key={index}>{ error }</li>) }
                </ul>
            </div>
        )
    }

    function renderProfilePicture() {
        return signupForm.profilePicture !== ''
            ? <img className="profile-picture" src={signupForm.profilePicture} alt={ `${signupForm.displayName}'s profile avatar` } />
            : <div className="profile-picture"><p>Picture</p></div> 
    }

    function renderCookieForm() {
        return (
            <div className="form-container">
                <h1>Freetrade Authentication Cookie</h1>
                <ul>
                    <li>Log into the Freetrade <a href="https://web.freetrade.io/login" target="_blank" rel="noreferrer">web interface</a></li>
                    <li>Open your browsers dev tools and find cookies</li>
                    <li>Copy and paste the value of <code>ft_web_session</code> into the text area</li>
                </ul>
    
                <textarea onChange={e => signupForm.freetradeCookie = e.target.value}></textarea>
    
                <footer>
                    <button className="link" onClick={() => props.SetShowSignup(false)}>Log In</button>
                    
                    <div>
                        <button onClick={() => setPage(1)}>Back</button>
                        <button className="btn-pink">Sign Up</button>
                    </div>
                </footer>
            </div>
        )
    }

    function nextButtonClick(): void {
        if (signupForm.isValid()) {
            setPage(2)
            return
        }

        setSignupForm({ ...signupForm })
    }

    return page === 1 ? renderSignupForm() : renderCookieForm()
}
