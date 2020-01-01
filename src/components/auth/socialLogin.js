import React, { useState } from "react";
import SocialButton from "./socialButton";
import { httpConstants } from "../../constants";

function SocialLogin() {
  const [profileObj, setProfileObj] = useState({
    isLoggedIn: "false",
    name: "",
    email: "",
    picture: ""
  });
  const handleSocialLogin = user => {
    console.log("user", user);
    setProfileObj({
      isLoggedIn: true,
      name: user.profile.name,
      email: user.profile.email,
      picture: user.profile.profilePicURL
    });
  };

  const handleSocialLoginFailure = err => {
    console.error("err", err);
  };

  return (
    <div style={{ height: "100vh", background: "#d3d3d3" }}>
      {profileObj.isLoggedIn === true ? (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#d3d3d3",
            padding: "20px"
          }}
        >
          <p>Hi, You are logged in !</p>
          <img src={profileObj.picture} alt={profileObj.name} />
          <h3>Welcome {profileObj.name}</h3>
          <h4>Email: {profileObj.email}</h4>
        </div>
      ) : (
        <div>
          <div
            style={{
              width: "500px",
              background: "#72bcd4",
              padding: "20px",
              margin: "auto",
              textAlign: "center"
            }}
          >
            <span style={{ color: "#fff" }}>
              Get Started with Facebook and Google login
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              margin: "auto",
              height: "500px",
              width: "500px"
            }}
          >
            <div>
              <img
                src="/images/Facebook.png"
                alt="facebook"
                width="150px"
                height="150px"
                style={{ marginBottom: "10px" }}
              />
              <SocialButton
                provider="facebook"
                appId={`${httpConstants.SOCIAL_LOGIN.FACEBOOK_APP_ID}`}
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
              >
                <span
                  className="fa fa-facebook-f"
                  style={{ color: "blue", marginRight: "5px" }}
                ></span>
                Login with Facebook
              </SocialButton>
            </div>
            <div>
              <img
                src="/images/google.jpg"
                alt="Google"
                width="150px"
                height="150px"
                style={{ marginBottom: "10px" }}
              />
              <SocialButton
                provider="google"
                appId={`${httpConstants.SOCIAL_LOGIN.GOOGLE_OATH_CLIENT_ID}`}
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
              >
                <span
                  className="fa fa-google"
                  style={{ color: "green", marginRight: "5px" }}
                ></span>
                Login with Google
              </SocialButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SocialLogin;
