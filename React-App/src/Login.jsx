function Login (){
    return (
        <>
        <form className="my-5" style={{width : "50%", margin : "auto"}}>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Re-enter Password</label>
            <input type="password" className="form-control" />
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">I Agree</label>
        </div>
        <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
        </>
    );
}

export default Login;