import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout(){
    return(
        <div className="siteWrap">
            <Navbar />
            <div className="content"><Outlet /></div>
            <Footer />
        </div>
    )
}