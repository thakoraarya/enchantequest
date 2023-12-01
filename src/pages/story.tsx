import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoaderAnimation } from "../loaders/LoaderAnimation";

import Navbar from "../components/Navbar";
import { Links } from "../components/links";
import storyService from "../backend/story";

const Story = () => {
  const [Error, setError] = useState("");
  const [userData, setUserData] = useState<any>(null); // Add state to hold user data
  const [storyData, setStory] = useState<any>(null); // Add state to hold user data
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const checkUser = useSelector((state: any) => state.auth.status);
  const checkUserData = useSelector((state: any) => state.auth.userData);
  const checkStory = useSelector((state: any) => state.story.storyContent);

  //   check for the formdata and pass that into the openai function named lostory after checking if user is logged in or not
  useEffect(() => {
    document.title = "Story | TEQ";
    const getuser = async () => {
      console.log('into the story page', checkStory);
      setError("");
      try {
        if (checkUser !== false) {
          console.log("userstatus", checkUser);
          setUserData(checkUserData);
          setLoading(false);
          if (checkStory !== null) {
            const story: any = await storyService.getStory(checkStory);
            console.log("storyid", story.toString());
            setStory(story);
          } else if (Error) {
            return setError(Error);
          }
        }
        else return navigate("/login");
      } catch (error: any) {
        return setError(error.message);
      }
    };
    getuser();

  }, [checkUser, checkStory, Error, checkUserData, navigate]);

  return (
    <>
      {!loading ? (
        <div>
          {userData && (
            <div className="bg-slate-200 p-4 w-auto">
              <Navbar username={userData.name} />
              <Links />
              {storyData && <p className="text-gray-100 text-6xl font-kaisei">{storyData}</p>}
            </div>
          )}
        </div>
      ) : (
        <LoaderAnimation />
      )}
    </>
  );
};

export default Story;
