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
  const checkUserData = useSelector((state: any) => state.auth.userData);
  const getstoryid = useSelector((state: any) => state.story.storyContent);

  //   check for the formdata and pass that into the openai function named lostory after checking if user is logged in or not
  useEffect(() => {
    document.title = "Story | TEQ";
    const getuser = async () => {
      setError("");
      try {
        setUserData(checkUserData);
        setLoading(false);
        if (getstoryid !== null) {
          console.log(' story id on story page', getstoryid);
          const story: any = await storyService.getStory(getstoryid);
          console.log("storyid", story);
          setStory(story);
        }
        else if (Error) {
          return setError(Error);
        }
        else return navigate("/createstory");

      } catch (error: any) {
        return setError(error.message);
      }
    };
    getuser();

  }, [Error]);

  return (
    <>
      {!loading ? (
        <div>
          {userData && (
            <div className="bg-slate-200 p-4 w-auto">
              <Navbar username={userData.name} />
              <Links />
              {storyData && (<>
                <p className="text-gray800 text-xl font-kaisei">{storyData.storyname}</p>
                <p className="text-gray800 text-xl font-kaisei">{storyData.storycontent}</p>
              </>
              )}
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
