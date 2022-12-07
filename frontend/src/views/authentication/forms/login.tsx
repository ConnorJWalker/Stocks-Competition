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
                <a href="#" onClick={() => props.SetShowSignup(true)}>Sign Up</a>
                <button className="btn-pink">Log In</button>
            </footer>
        </div>

    )
}