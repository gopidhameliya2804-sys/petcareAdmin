import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../utils/Logout";
import api from "../utils/AxiosConfig";
import BreadCrumbs from "../comman/BreadCrumbs";

function Profile() {
  let [userProfile, setUserProfile] = useState({});

  async function FetchUserProfile() {
    try {
      let response = await api.get("/user/profile");
      // console.log(response.data);
      setUserProfile(response.data.users);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    FetchUserProfile();
  }, []);

  // const user = {
  //   username: userProfile.name,
  //   email: userProfile.email,
  //   phone: userProfile.phone,
  // };
  console.log(userProfile);
  

  return (

    <div>
      {/*Start breadcrumb area*/}
      <BreadCrumbs title1="My Profile" title2="profile" imageUrl="assets/images/breadcrumb/breadcrumb-1.png"></BreadCrumbs>
      {/*End breadcrumb area*/}

      {/* Profile Section */}
      <section className="profile-area pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7 col-md-8">
              <div className="profile-card shadow-lg p-4 text-center">
                {/* Profile Image */}
                <div className="profile-img mb-3">
                  <i className="icon-user border p-2 rounded-circle bg-light me-2" />
                </div>

                {/* User Name */}
                <h3 className="mb-3">{userProfile.username}</h3>

                {/* Details */}
                <div className="profile-details text-left mt-4">
                  <div className="d-flex justify-content-between mb-3">
                    <strong>Email:</strong>
                    <span>{userProfile.email}</span>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <strong>Phone:</strong>
                    <span>{userProfile.phone}</span>
                  </div>
                </div>

                {/* Edit Button */}
                <div className="d-flex justify-content-around">
                  <div className="mt-4">
                    <Link to="/edit-profile" 
                      className="btn-one gradient-bg-1" 
                      state={userProfile}>
                      <span className="txt">Edit Profile</span>
                    </Link>
                  </div>
                  <div className="mt-4">
                    <Link
                      className="btn-one gradient-bg-1"
                      onClick={() => {
                        Logout();
                      }}
                    >
                      <span className="txt">Logout</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional extra styling */}
      <style>
        {`
          .profile-card {
            background: #fff;
            border-radius: 16px;
            padding: 40px 30px;
          }

          .profile-details span {
            color: #333;
          }

          .profile-img img {
            transition: 0.3s;
          }

          .profile-img img:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
}

export default Profile;
