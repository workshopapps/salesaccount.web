import menuIcon from "../assets/menu.svg";

export default function Navbar({ setShowSideBar }) {
  return (
    <nav className="w-full bg-[#1849A9] px-7 py-4 flex shadow-[0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)] z-50 fixed top-0">
      <div className="flex items-center mr-6 md:mr-12">
        <img
          src={menuIcon}
          alt=""
          className="cursor-pointer"
          onClick={() => setShowSideBar((prev) => !prev)}
        />
        <p className="font-semibold text-4xl leading-[50px] text-[#D9D9D9] ml-8 hidden md:inline-block">
          Act Pal
        </p>
      </div>

      <div className="w-[40%] max-w-[500px] py-2 px-4 bg-[#F9FAFB] rounded-xl flex items-center">
        <span className="material-icons-outlined text-xl text-[#6B6868] mr-2">
          search
        </span>
        <input
          type="text"
          placeholder="Search"
          className="w-full font-medium text-sm text-[#667085] outline-none bg-transparent"
        />
      </div>

      <div className="flex gap-2 ml-auto">
        <div className="w-12 h-12 bg-[#F2F4F7] rounded-lg relative flex items-center justify-center cursor-pointer">
          <span className="material-icons-outlined text-[#ACACAC] text-2xl">
            notifications
          </span>
          <span className="w-3 h-3 rounded-full bg-[#EF4444] absolute top-3 right-3" />
        </div>

        <div className="w-12 h-12 bg-[#F2F4F7] rounded-lg relative flex items-center justify-center cursor-pointer">
          <span className="material-icons-outlined text-[#ACACAC] text-2xl">
            dark_mode
          </span>
        </div>

        <div className="w-12 h-12 bg-[#F2F4F7] rounded-lg relative flex items-center justify-center cursor-pointer">
          <span className="material-icons-outlined text-[#ACACAC] text-2xl">
            grid_view
          </span>
        </div>
      </div>
    </nav>
  );
}
