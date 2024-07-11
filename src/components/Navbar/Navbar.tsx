import Sidebar from "../Navbar/Sidebar";
import logo from "../../assets/robotic.svg";

const Navbar = () => {
  return (
    <>
      <Sidebar />
      <nav className="max-w-[1366px] mx-auto sticky top-0 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="px-4 mx-auto relative text-sm h-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-shrink-0">
              <img src={logo} alt="logo" className="w-24 h-24" />
              <span className="text-xl tracking-tight ml-2">TechWise AI</span>
            </div>
            <div className="flex items-center gap-x-6">
              <button className="btn-gray py-2 px-3 border rounded-md">Sign In</button>
              <button className="btn-orange">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

//bg-gradient-to-b from-[#0c0c1d] to-[#111132]
