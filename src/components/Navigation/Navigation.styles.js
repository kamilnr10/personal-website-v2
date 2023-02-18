export const styles = {
  navClass:
    "w-full h-20 fixed top-0 left-1/2 transform -translate-x-1/2 px-5 max-w-[1240px] flex items-center justify-between ease-in duration-300 md:h-36",
  logo: "z-20 flex justify-center items-center",
  menuMedium: "flex items-center",
  navlinksMedium: "space-between gap-5 hidden md:flex md:text-lg",
  menuSmall: "md:hidden",
  hamburgerMenu: "flex justify-center items-center",
  navOpen:
    "fixed left-0 top-0 w-[80%] h-screen px-5 border-r border-r-gray-400 bg-[#242424] ease-in duration-300",
  navClosed:
    "fixed left-[-100%] top-0 w-[60%] h-screen px-5 ease-in duration-300",
  sideBarWrapper: "flex flex-col items-center justify-center",
  listSideBar: "h-full flex flex-col justify-center space-y-10",
  navLinksSmall:
    "flex before:content-['<_'] after:content-['/>'] active:text-secondaryText",
  iconLink: "mr-1 ml-1",
};
