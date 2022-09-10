import React, { useContext, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { AuthContext } from "../utils/AuthProvider";
import { Button } from "@nextui-org/react";
import { SearchIcon, MoonIcon, SunIcon, MenuIcon } from "../icons";
import { Input, WindmillContext } from "@windmill/react-ui";
import { useMoralis, useMoralisQuery } from "react-moralis";

import Emojicons from "../pages/Emojicons";

function Header() {
  const { mode, toggleMode } = useContext(WindmillContext);
  const { toggleSidebar } = useContext(SidebarContext);
  const { address, signer, connect, disconnect, web3Provider } =
    useContext(AuthContext);
  const { user } = useMoralis();
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  }

  let userprofile = JSON.parse(localStorage.getItem("userprofile"));

  console.log(userprofile);
  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  return (
    <header className="z-30 w-full py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-blue-600 dark:text-blue-300">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-blue"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        {/* <!-- Search input --> */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 rounded-lg focus-within:text-blue-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="pl-8 text-gray-700"
              placeholder="Search for files"
              aria-label="Search"
            />
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-blue"
              onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {mode === "dark" ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </li>
          <li className="flex">
            {web3Provider ? (
              // <div
              //   className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-4 md:px-6  md:py-3 py-2 rounded-md cursor-pointer text-white"
              //   onClick={() => {
              //     disconnect();
              //   }}
              // >
              //   Disconnect
              // </div>

              <Button
                onClick={() => {
                  disconnect();
                }}
                color="gradient"
                auto
                className="mr-2"
              >
                Disconnect
              </Button>
            ) : (
              <Button
                onClick={() => {
                  connect();
                }}
                color="gradient"
                auto
                className="mr-2"
              >
                Connect
              </Button>
            )}

            {userprofile[2].length === 0 ? (
              <div class=" hidden md:flex items-center justify-center h-10 w-10 rounded-full bg-blue-300 flex-shrink-0">
                <Emojicons username={user.getUsername()} />
              </div>
            ) : (
              <img
                class=" hidden md:block mb-3 w-10 h-10 rounded-full shadow-lg"
                src={userprofile[2]}
                alt="Bonnie image"
              />
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
