import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom/dist/umd/react-router-dom.development";

const Details = () => {

    const {id} = useParams()
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h1>{id}</h1>
                </div>
                <RightSideNav></RightSideNav>
            </div>

        </div>
    );
};

export default Details;