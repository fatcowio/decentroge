import React, { useState, useEffect, useContext } from "react";
import response from "../utils/demo/tableData";
import ChartCard from "../components/Chart/ChartCard";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";
import PageTitle from "../components/Typography/PageTitle";
import WS from "../assets/img/ws.png";
import IPFS from "../assets/img/ipfs.png";
import Moralis from "../assets/img/moralis.png";
import { Input, HelperText, Label, Select, Textarea } from "@windmill/react-ui";
import { AuthContext } from "../utils/AuthProvider";

import { Button } from "@windmill/react-ui";
import {
  ServerIcon,
  MusicalNoteIcon,
  PhotoIcon,
  FilmIcon,
  DocumentTextIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Modals from "../components/Modal/Modal";
import { ellipseAddress } from "../lib/utilities";
function Charts() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const { address, signer, contract, provider, chainId, connect } =
    useContext(AuthContext);
  console.log(contract);
  console.log(signer);
  const [token, settoken] = useState("");
  const resultsPerPage = 10;
  const totalResults = response.length;
  const [platforms, setplatforms] = useState([]);
  const [platformName, setplatformName] = useState("");
  const [projectid, setprojectid] = useState("");
  const [projectsecret, setprojectsecret] = useState("");
  async function loadPlatforms() {
    const data = await signer?.getPlatforms();
    setplatforms(data);
    console.log("platforms ----------", data);
  }

  useEffect(() => {
    loadPlatforms();
  }, [signer]);

  const getWeb3storage = () => {
    var res = platforms?.filter((data) => data.platformName === "Web3 Storage");
    return res;
  };

  const getIPFSstorage = () => {
    var res = platforms?.filter((data) => data.platformName === "IPFS");
    return res;
  };
  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  const onCreatePlatform = async () => {
    let transaction = await signer.addPlatform(
      platformName,
      token,
      projectid,
      projectsecret
    );
    await transaction.wait();
  };

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);
  return (
    <>
      <button
        onClick={connect}
        className=" bg-gradient-to-r my-4 from-blue-400 to-emerald-400 text-center w-max   px-4 py-1  rounded-full cursor-pointer text-white"
      >
        connect
      </button>
      <PageTitle>Storage Statistics</PageTitle>
      <Modals
        title={"Add Credentials"}
        state={modal}
        onClick={() => {
          setModal(false);
        }}
        actionButtonDesktop={
          <div className="hidden sm:block">
            <Button
              onClick={() => {
                onCreatePlatform();
              }}
            >
              Create
            </Button>
          </div>
        }
        actionButtonMobile={
          <div className="block w-full sm:hidden">
            <Button
              block
              size="large"
              onClick={() => {
                onCreatePlatform();
              }}
            >
              Create
            </Button>
          </div>
        }
      >
        {platformName === "IPFS" ? (
          <>
            <Label>
              <span>Project Id</span>
              <Input
                className="mt-1 mb-4"
                placeholder="Project id"
                value={projectid}
                onChange={(e) => {
                  setprojectid(e.target.value);
                }}
              />
            </Label>
            <Label>
              <span>Project Secrete</span>
              <Input
                className="mt-1 mb-4"
                placeholder="Project secret"
                value={projectsecret}
                onChange={(e) => {
                  setprojectsecret(e.target.value);
                }}
              />
            </Label>
          </>
        ) : (
          <Label>
            <span>Token</span>
            <Input
              className="mt-1 mb-4"
              placeholder="token"
              value={token}
              onChange={(e) => {
                settoken(e.target.value);
              }}
            />
          </Label>
        )}
      </Modals>
      <div className="mb-4">
        <ChartCard title="Decentralize storage ">
          <div className="grid md:grid-cols-2 grid-cols-1  gap-6">
            <article class="p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500  rounded-lg">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-300">
                    Platform
                  </p>

                  <p class="text-2xl font-medium text-gray-900 dark:text-gray-300">
                    IPFS
                  </p>
                </div>

                <img src={IPFS} className="rounded-full w-10 h-10" />
              </div>

              {getIPFSstorage()?.length >= 1 ? (
                <div class="flex mt-1 text-green-600 dark:text-green-400 gap-1 cursor-pointer">
                  Platform added already
                </div>
              ) : (
                <>
                  <p className="text-red-500">NB: Credentials are Immutable</p>
                  <div
                    onClick={() => {
                      setplatformName("IPFS");
                      setModal(true);
                    }}
                    class="flex mt-1 text-green-600 dark:text-green-400 gap-1 cursor-pointer"
                  >
                    Add Credential <PlusIcon className="h-6" />
                  </div>
                </>
              )}
            </article>

            <article class="p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500  rounded-lg">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-300">
                    Platform
                  </p>

                  <p class="text-2xl font-medium text-gray-900 dark:text-gray-300">
                    Web3.storage
                  </p>
                </div>

                <img src={WS} className="rounded-full w-10 h-10" />
              </div>

              {getWeb3storage()?.length >= 1 ? (
                <div class="flex mt-1 text-green-600 dark:text-green-400 gap-1 cursor-pointer">
                  Platform added already
                </div>
              ) : (
                <>
                  <p className="text-red-500">NB: Credentials are Immutable</p>
                  <div
                    onClick={() => {
                      setplatformName("Web Storage");
                      setModal(true);
                    }}
                    class="flex mt-1 text-green-600 dark:text-green-400 gap-1 cursor-pointer"
                  >
                    Add Credential <PlusIcon className="h-6" />
                  </div>
                </>
              )}
            </article>
          </div>
        </ChartCard>
      </div>
      <div className="grid gap-6 mb-8 md:grid-cols-1">
        <ChartCard title={`${ellipseAddress(address)} Storage`}>
          <div className="flex flex-row space-x-3 items-center ">
            <img src={IPFS} className="w-8 rounded-lg" />
            <h1 className="text-xl font-bold dark:text-gray-200 ">IPFS </h1>
          </div>
          <ServerIcon className="h-40 dark:text-gray-100 text-gray-600" />
          <div className="flex flex-row space-x-3">
            <div class="w-full bg-gray-200 rounded-lg dark:bg-gray-700">
              <div
                class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                style={{ width: `${0.4}%` }}
              >
                {" "}
                1%
              </div>
            </div>
            <span className="dark:text-white">1TB</span>
          </div>
        </ChartCard>

        {/* <ChartCard title="Breakdown">
          <div className="grid md:grid-cols-2 grid-cols-1  gap-6">
            <div className="bg-red-400 rounded-lg p-4">
              <MusicalNoteIcon className="h-8 text-white" />
              <h3 className="font-bold text-2xl text-gray-100">0</h3>
              <p className="text-white text-md">Music</p>
            </div>
            <div className="bg-yellow-300 rounded-lg p-4">
              <PhotoIcon className="h-8 text-white" />
              <h3 className="font-bold text-2xl text-gray-100">0</h3>

              <p className="text-white text-md">Image</p>
            </div>
            <div className="bg-blue-400 rounded-lg p-4">
              <FilmIcon className="h-8 text-white" />
              <h3 className="font-bold text-2xl text-gray-100">0</h3>

              <p className="text-white text-md">Videos</p>
            </div>
            <div className="bg-green-400 rounded-lg p-4">
              <DocumentTextIcon className="h-8 text-white" />
              <h3 className="font-bold text-2xl text-gray-100">0</h3>

              <p className="text-white text-md">Files</p>
            </div>
          </div>
        </ChartCard> */}
      </div>
    </>
  );
}

export default Charts;
