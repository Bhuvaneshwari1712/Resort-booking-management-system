import React from 'react';
import ProgressSteps from '../ProgressSteps';
import {Link} from "react-router-dom";
import "../../CSS/Profile.css";
import {useSelector} from "react-redux";
import LoadingSpinner from "../LoadingSpinner";


const Profile = () => {
    const {user,loading} = useSelector((state) => state.user);
  return (
    <>
    <ProgressSteps/>
    {loading && <LoadingSpinner/>}
    {user && !loading &&(
        <div className="row justify-content-around mt-5">
            <div className="col-6 col-md-6 profile">
                <div className="avatar">
                    <div className="avatar-profile text-center mr-2">
                        <img className="rounded-circle figure-img img-fluid"
                         src={user.avatar.url}
                         alt="avatar"
                    
                    
                    />
                    </div>
                    <h3>Welcome user</h3>
                </div>
                <div className="userInfo">
                    <h4>Full name</h4>
                    <p>{user.name}</p>

                    <h4>Email address</h4>
                    <p>{user.email}</p>
                    <h4>Phone number</h4>
                    <p>{user.phoneNumber}</p>
                    <div className="buttons">

                        <Link to="/editprofile" id="edit_profile" className="btn btn-block my-5">
                        Edit profile
                        </Link>
                        <Link to="/user/updatepassword" className="btn btn-block my-5 mx-4">
                            Change password
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )}
    </>
  )
}

export default Profile