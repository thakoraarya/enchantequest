import { useEffect, useState } from "react";
import authService from "../backend/auth";
import { login as storeLogin } from "../store/authSlice";
// import { Account, Client } from "appwrite";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoaderAnimation } from "../loaders/LoaderAnimation";
import { createstory as logstory } from "../backend/openai";
import Navbar from "../components/Navbar";
import { Links } from "../components/links";
// import { createStory } from "../store/storySlice";
// interface StoryProps {
//   id: string;
// }
const Story = () => {
  const [Error, setError] = useState("");
  const [userData, setUserData] = useState<any>(null); // Add state to hold user data
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formdataa = useSelector((state: any) => state.story.storyContent);
  useEffect(() => {
    const getuser = async () => {
      setError("");
      try {
        const userAvail = await authService.getCurrentUser();
        if (userAvail) {
          dispatch(storeLogin(userAvail));
          setUserData(userAvail.name);
          if (formdataa) {
            //   console.log(formdataa);
            logstory(formdataa);
          }
          setLoading(false);
          return 1;
        } else if (Error) {
          window.alert(Error);
        } else return navigate("/login");
      } catch (error: any) {
        return setError(error.message);
      }
    };
    getuser();
  }, [dispatch, formdataa, Error, navigate]);

  return (
    <>
      {!loading ? (
        <div>
          {userData && (
            <>
              {/* <p className="text-gray-100 text-6xl font-kaisei">{userData}</p> */}
              <Navbar username={userData} />
              <Links />
            </>
          )}
        </div>
      ) : (
        <LoaderAnimation />
      )}
    </>
  );
};

export default Story;
