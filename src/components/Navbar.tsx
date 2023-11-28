import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import { Link } from "react-router-dom";
interface UserProps {
  username: string;
}
const Navbar = ({ username }: UserProps) => {
  return (
    <nav className="flex justify-center px-10 w-min h-auto py-3 gap-x-8 bg-zinc-900 bg-opacity-25 rounded-full border-2 border-stone-900 backdrop-blur-[12.10px] items-center gap-6">
      <Link
        to="#"
        rel="noreferrer"
        className="w-auto flex gap-x-2 border-transparent  hover:border-eqred border-b-2 transition-all transform-all hover:-translate-y-2 duration-300 ease-in justify-between items-center text-gray200 text-lg font-normal font-flex leading-10">
        <AccountCircleOutlinedIcon />
        {username}
      </Link>
      <Link
        to="#"
        rel="noreferrer"
        className="w-auto min-w-fit flex gap-x-2 border-transparent capitalize hover:border-eqred border-b-2 transition-all transform-all hover:-translate-y-2 duration-300 ease-in justify-between items-center text-gray200 text-lg font-normal font-flex leading-10">
        <HistoryEduOutlinedIcon /> my stories
      </Link>
      <Link
        to="/logout"
        rel="noreferrer"
        className="box-border w-auto flex group border-transparent hover:border-eqred transition-all duration-300 transform-all hover:-translate-y-2 ease-in border-b-2 gap-x-2  justify-between items-center text-gray200 text-lg font-normal font-flex leading-10">
        <LogoutSharpIcon />
        Bento
        {/* <iframe title='bento' loading='eager' src='https://bento.me/thakoraarya' className='hidden border-2 border-eqred group-hover:block absolute h-96 bg-gradient-to-b from-red-100 via-white transition-all duration-300 ease-out group-hover:hover:h-[35rem] delay-300 to-white scroll-smooth p-5 top-10 rounded-xl w-96' /> */}
      </Link>
    </nav>
  );
};

export default Navbar;
