import ArrowBackwardIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <section className="bg-spiderbg bg-no-repeat bg-center h-screen w-screen bg-gray800 flex flex-col justify-center items-center">
      <div className=" h-screen w-screen backdrop-blur-sm bg-black/40 flex flex-col justify-center items-center">
        <h1 className="text-6xl text-gray500">404 - page not found</h1>
        <Link
          to={"/"}
          className="text-4xl text-gray-100 hover:text-eqred duration-300 transition-all">
          {" "}
          <ArrowBackwardIcon /> Back to Home
        </Link>
        <img
          className="w-56 h-56 object-contain"
          src="https://media.tenor.com/eneT3N35liIAAAAC/travolta-waiting.gif"
          alt="not found"
        />
      </div>
    </section>
  );
};

export default Notfound;
