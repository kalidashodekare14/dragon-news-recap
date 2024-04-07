import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom/dist/umd/react-router-dom.development";

const PrivateRoutes = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)
    if(loader){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/sing_in"></Navigate>
};

export default PrivateRoutes;