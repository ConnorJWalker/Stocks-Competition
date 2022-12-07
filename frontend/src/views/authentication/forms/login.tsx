export default function Login(props: any) {
    return (
        <div className="form-container">
            <h1>Log In</h1>
            <div className="form-group">
                <div className="text-input-group">
                    <input placeholder="Discord Username" type="text" style={{ marginBottom: '10px' }} />
                    <input placeholder="Password" type="password" />
                </div>
            </div>

            <footer>
                <button className="link" onClick={() => props.SetShowSignup(true)}>Sign Up</button>
                <button className="btn-pink">Log In</button>
            </footer>
        </div>
    )
}