import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import RightSideNav from "../../pages/Shared/RightSideNav/RightSideNav";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

const SingIn = () => {

    const { loginUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('login page', location)

    const handleLogIn = e => {
        e.preventDefault()
        const from = new FormData(e.currentTarget)
        const email = from.get('email')
        const password = from.get('password')
        // console.log(email, password)
        // firebase create
        loginUser(email, password)
            .then(result => {
                console.log(result.user)

                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }




    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3  bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogIn} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <h2 className="text-blue-400">Please <Link to="/sing_up">Register here</Link></h2>
                            </form>
                        </div>
                    </div>
                </div>
                <div >
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default SingIn;