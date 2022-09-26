import "./navbar.css"
import {CustomLogo} from "../../features/CustomLogo"
import { Link } from "react-router-dom"
import UserProfile from "../../assets/images/user.svg" 
export const NavBar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-image_wrapper">
                <Link to="/"><CustomLogo/></Link>
            </div>
            <div className="navbar-image_profile">
               <img src={UserProfile} alt="user profile"/>
            </div>
        </div>
    )
}