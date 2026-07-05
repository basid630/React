import { useState } from "react";

function Login (){
    
        const [pwd1, setPwd1] = useState("");
        const [pwd2, setPwd2] = useState("");
        const [same, setSame] = useState(true);

        function handlePwd1Change (event){
            setPwd1(event.target.value);
        }

        function handlePwd2Change (event){
            setPwd2(event.target.value);
            if (pwd1 === event.target.value){
                console.log("same");
                setSame(true);
            }
            else{
                console.log("not same");
                setSame(false);
            }
        }

    return (
        <>
        <form className="my-5" style={{width : "50%", margin : "auto"}}>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <input value={pwd1} onChange={handlePwd1Change} type="password" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Re-enter Password</label>
            <input value={pwd2} onChange={handlePwd2Change} type="password" className="form-control" />
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">I Agree</label>
        </div>
        {!same && <p>Password not Match</p>}
        <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
        </>
    );
}

export default Login;