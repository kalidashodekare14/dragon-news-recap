import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";


const Home = () => {

    const newsLoader = useLoaderData()

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border space-y-3">
                    {
                        newsLoader.map(newsCard =>
                            <div key={newsCard._id}>
                                <div className="card bg-base-100 shadow-xl">
                                    
                                    <div className="card-body">
                                        <h2 className="card-title">{newsCard.title}</h2>
                                        <img src={newsCard.image_url} alt="" />
                                        <p>{newsCard.details.slice(0, 200)}</p>
                                        <div className="card-actions">
                                            <Link to={`/details/:${newsCard._id}`} className="text-blue-600">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;