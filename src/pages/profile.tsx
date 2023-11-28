import React, { useEffect, useState } from "react";
import authService from "../backend/auth";
import { login as storeLogin } from "../store/authSlice";
const Profile = () => {
  const [Error, setError] = useState("");
  const [userData, setUserData] = useState<any>(null); // Add state to hold user data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getuser = async () => {
      setError("");
      try {
        const getuser = await authService.getCurrentUser();
        if (getuser) {
          // console.log(getuser);
          setUserData(getuser);
          dispatch(storeLogin(getuser));
          setLoading(false);
        } else return Error;
      } catch (error: any) {
        return setError(error.message);
      }
    };
    getuser();
  });

  return (
    <>
      {loading ? (
        <div>
          {userData && (
            <p className="text-gray-100 text-6xl font-kaisei">
              {userData.name}
            </p>
          )}
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default Profile;

function dispatch(arg0: { payload: any; type: "auth/login" }) {
  throw new Error("Function not implemented.");
}
