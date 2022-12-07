import React, { useState } from 'react'

import Login from './forms/login'
import Signup from './forms/signup'

import './authentication.css'

export default function Authentication() {
    const [showSignup, setShowSignup] = useState(true)

    return (
        <div className="auth-container">
            { showSignup ? <Signup SetShowSignup={setShowSignup} /> : <Login SetShowSignup={setShowSignup} /> }
        </div>
    )
}
