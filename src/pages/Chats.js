import React, { useState } from "react";
import PageTitle from "../components/Typography/PageTitle";
import CTA from "../components/CTA";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@windmill/react-ui";
import Profile from "../assets/img/irupus.png";
function Modals() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <PageTitle>Modals</PageTitle>

      <div class="flex h-screen antialiased text-gray-800">
        <div class="flex md:flex-row flex-col h-full w-full overflow-x-hidden">
          <div class="flex flex-col px-4 mb-5 mt-6 dark:bg-gray-700 rounded-lg  w-full md:w-64 bg-white flex-shrink-0">
            {/* <div class="flex flex-col items-center bg-indigo-100 dark:bg-gray-800 border border-gray-200 mt-4 w-full py-6 px-6 rounded-lg">
              <div class="h-20 w-20 rounded-full border overflow-hidden">
                <img
                  src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                  alt="Avatar"
                  class="h-full w-full"
                />
              </div>
              <div class="text-sm font-semibold mt-2">Aminos Co.</div>
              <div class="text-xs text-gray-500">Lead UI/UX Designer</div>
              <div class="flex flex-row items-center mt-3">
                <div class="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
                  <div class="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
                </div>
                <div class="leading-none ml-1 text-xs">Active</div>
              </div>
            </div> */}

            <div class="w-full mt-4 bg-white rounded-lg border border-gray-200  dark:bg-gray-800 dark:border-gray-700">
              <div class="flex justify-end px-4 pt-4"></div>
              <div class="flex flex-col items-center pb-10">
                <img
                  class="mb-3 w-24 h-24 rounded-full shadow-lg"
                  src={Profile}
                  alt="Bonnie image"
                />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  0x0ffdsfdf
                </h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  32 ETH{" "}
                </span>
                <div className="items-center justify-center ">
                  <div class="w-4 h-4 animate-ping mt-1 bg-green-400  rounded-full m-auto"></div>

                  <p className="dark:text-white">Online</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col flex-auto h-full p-6">
            <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl dark:bg-gray-700 bg-gray-100 h-full p-4">
              <div class="flex flex-col h-full overflow-x-auto mb-4">
                <div class="flex flex-col h-full">
                  <div class="grid grid-cols-12 gap-y-2">
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class="relative ml-3 text-sm bg-white rounded-md dark:bg-gray-800 dark:text-white py-2 px-4 shadow rounded-xl">
                          <div>Hey How are you today?</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class="relative ml-3 text-sm bg-white rounded-md dark:bg-gray-800 dark:text-white py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Vel ipsa commodi illum saepe numquam maxime
                            asperiores voluptate sit, minima perspiciatis.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                      <div class="flex items-center justify-start flex-row-reverse">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class="relative mr-3 text-sm bg-indigo-100 dark:bg-gray-600 dark:text-white rounded-md py-2 px-4 shadow rounded-xl">
                          <div>I'm ok what about you?</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                      <div class="flex items-center justify-start flex-row-reverse">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class="relative mr-3 text-sm bg-indigo-100 dark:bg-gray-600 dark:text-white rounded-md py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                            ?
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class="relative ml-3 text-sm bg-white rounded-md dark:bg-gray-800 dark:text-white py-2 px-4 shadow rounded-xl">
                          <div>Lorem ipsum dolor sit amet !</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                      <div class="flex items-center justify-start flex-row-reverse">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class="relative mr-3 text-sm bg-indigo-100 dark:bg-gray-600 dark:text-white rounded-md py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                            ?
                          </div>
                          <div class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                            Seen
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                      <div class="flex items-center justify-start flex-row-reverse">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class="relative mr-3 text-sm bg-indigo-100 dark:bg-gray-600 dark:text-white rounded-md py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                            ?
                          </div>
                          <div class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                            Seen
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                      <div class="flex items-center justify-start flex-row-reverse">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class="relative mr-3 text-sm bg-indigo-100 dark:bg-gray-600 dark:text-white rounded-md py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                            ?
                          </div>
                          <div class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                            Seen
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div class="relative ml-3 text-sm bg-white rounded-md dark:bg-gray-800 dark:text-white py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-row items-center h-16 rounded-xl bg-white rounded-md dark:bg-gray-800 dark:text-white w-full px-4">
                <div>
                  <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div class="flex-grow ml-4">
                  <div class="relative w-full">
                    <input
                      type="text"
                      class="flex w-full border rounded-lg dark:bg-gray-900 dark:border-transparent rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                  </div>
                </div>
                <div class="ml-4">
                  <button class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                    <span>Send</span>
                    <span class="ml-2">
                      <svg
                        class="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modals;
