import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import InfoCard from "../components/Cards/InfoCard";
import { AuthContext } from "../utils/AuthProvider";

import PageTitle from "../components/Typography/PageTitle";
import response from "../utils/demo/tableData";
import Modals from "../components/Modal/Modal";
import { Input, HelperText, Label, Select, Textarea } from "@windmill/react-ui";
import FileDetail from "../components/Modal/FileDetail";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
  Button,
} from "@windmill/react-ui";

import {
  PhotoIcon,
  GifIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  PlusIcon,
  ServerIcon,
  CalendarIcon,
  ShieldCheckIcon,
  UserIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Image1 from "../assets/img/create-account-office-dark.jpeg";
import Image2 from "../assets/img/create-account-office.jpeg";
import Image3 from "../assets/img/forgot-password-office-dark.jpeg";
import Image4 from "../assets/img/forgot-password-office.jpeg";
import WS from "../assets/img/ws.png";
import IPFS from "../assets/img/ipfs.png";
import Moralis from "../assets/img/moralis.png";
import FolderCard from "../components/Cards/FolderCard";
import id from "faker/lib/locales/id_ID";
function Dashboard() {
  const history = useHistory();

  const { address, signer, contract, provider, chainId, connect } =
    useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [folders, setfolders] = useState([]);
  const [modal, setModal] = useState(false);
  const [fileModal, setFileModal] = useState(false);
  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;
  const [foldername, setfoldername] = useState("");
  // console.log(foldername);
  async function loadfolders() {
    const data = await signer?.getFolders(1);
    // console.log(data);
    setfolders(data);
    console.log("folders ----------", data);
  }

  useEffect(() => {
    loadfolders();
  }, [signer]);

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  const onCreateFolder = async (foldername_) => {
    let transaction = await signer.createFolder(foldername_, 1);
    let txReceipt = await transaction.wait();
    const [transferEvent] = txReceipt.events;
    const { foldername, _id } = transferEvent.args;
    history.push(`/app/folder/${foldername.toString()}/${_id.toString()}`);
    console.log(foldername, _id);
  };

  return (
    <>
      <Modals
        title={"Create Folder"}
        state={modal}
        onClick={() => {
          setModal(false);
        }}
        actionButtonDesktop={
          <div className="hidden sm:block">
            <Button
              onClick={() => {
                onCreateFolder(foldername);
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
                onCreateFolder(foldername);
              }}
            >
              Create
            </Button>
          </div>
        }
      >
        <Label>
          <span>Name</span>
          <Input
            className="mt-1"
            placeholder="Folder name"
            value={foldername}
            onChange={(e) => {
              setfoldername(e.target.value);
            }}
          />
        </Label>
      </Modals>
      <FileDetail
        title={"Details"}
        state={fileModal}
        onClick={() => {
          setFileModal(false);
        }}
        actionButtonDesktop={
          <div className="hidden sm:block">
            <Button
              onClick={() => {
                alert("fasfsdf");
              }}
            >
              Download
            </Button>
          </div>
        }
        actionButtonMobile={
          <div className="block w-full sm:hidden">
            <Button block size="large">
              Download
            </Button>
          </div>
        }
      >
        <div className="mb-4">
          <Button block size="small" layout="outline">
            Copy URL
          </Button>
        </div>
        <img src={Image1} className="rounded-lg" />
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm divide-y divide-gray-200">
            <thead>
              <tr className="">
                <th class="p-4 font-medium text-left text-gray-900 dark:text-gray-300 whitespace-nowrap">
                  <div class="flex items-center">Type</div>
                </th>
                <th class="p-4 font-medium text-left text-gray-900 dark:text-gray-300 whitespace-nowrap">
                  <div class="flex items-center">Size</div>
                </th>
                <th class="p-4 font-medium text-left text-gray-900 dark:text-gray-300 whitespace-nowrap">
                  <div class="flex items-center">Created</div>
                </th>
                <th class="p-4 font-medium text-left text-gray-900 dark:text-gray-300 whitespace-nowrap">
                  <div class="flex items-center">Platform</div>
                </th>
                <th class="p-4 font-medium text-left text-gray-900 dark:text-gray-300 whitespace-nowrap">
                  <div class="flex items-center">Owner</div>
                </th>
                <th class="p-4 font-medium text-left text-gray-900 dark:text-gray-300 whitespace-nowrap">
                  <div class="flex items-center">Privacy</div>
                </th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-100">
              <tr>
                <td class="p-4 font-medium text-gray-900 dark:text-gray-300 flex flex-col justify-start items-center whitespace-nowrap">
                  <PhotoIcon className="h-6 dark:text-gray-200" />{" "}
                  <span>Png</span>
                </td>
                <td class="p-4 text-gray-700 dark:text-gray-300  whitespace-nowrap">
                  <ServerIcon className="h-6  dark:text-gray-200" />{" "}
                  <span>12k</span>
                </td>
                <td class="p-4 text-gray-700 dark:text-gray-300 items-center whitespace-nowrap">
                  <CalendarIcon className="h-6  dark:text-gray-200" />{" "}
                  <span>12/26/2020</span>
                </td>
                <td class="p-4 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  <ShieldCheckIcon className="h-6  dark:text-gray-200" />{" "}
                  <span>IPFS</span>
                </td>
                <td class="p-4 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  <UserIcon className="h-6  dark:text-gray-200" />{" "}
                  <span>0xfef4a...</span>
                </td>
                <td class="p-4 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  <LockClosedIcon className="h-6  dark:text-gray-200" />{" "}
                  <span>Only You</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </FileDetail>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <div className=" mt-5 flex flex-row space-x-3 cursor-pointer items-center border-2 p-3 rounded-lg md:max-w-sm max-w-full border-blue-500 ">
          <img src={WS} className="w-8 rounded-lg" />
          <p class="text-xl font-medium text-gray-900 dark:text-gray-300">
            Web3.storage
          </p>{" "}
        </div>
        <div className=" mt-5 flex flex-row space-x-3 items-center cursor-pointer border-2 p-3 rounded-lg md:max-w-sm max-w-full border-gray-300 ">
          <img src={IPFS} className="w-8 rounded-lg" />
          <p class="text-xl font-medium text-gray-900 dark:text-gray-300">
            IPFS{" "}
          </p>{" "}
        </div>
        <div className=" mt-5 flex flex-row space-x-3 items-center cursor-pointer border-2 p-3 rounded-lg md:max-w-sm max-w-full border-gray-300 ">
          <img src={Moralis} className="w-8 rounded-lg" />
          <p class="text-xl font-medium text-gray-900 dark:text-gray-300">
            Moralis{" "}
          </p>{" "}
        </div>
      </div>
      <PageTitle>Quick Access</PageTitle>
      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <div
          onClick={() => {
            setFileModal(true);
          }}
        >
          <InfoCard
            title="Desktop"
            image={Image1}
            value="Created on 23/3/11"
          ></InfoCard>
        </div>

        <InfoCard
          title="Desktop"
          image={Image2}
          value="Created on 23/3/11"
        ></InfoCard>
        <InfoCard
          title="Desktop"
          image={Image3}
          value="Created on 23/3/11"
        ></InfoCard>
        <InfoCard
          title="Desktop"
          image={Image4}
          value="Created on 23/3/11"
        ></InfoCard>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <PageTitle>Folders</PageTitle>
        <PlusIcon
          onClick={() => {
            setModal(true);
          }}
          className="h-6 cursor-pointer dark:text-gray-200"
        />
      </div>
      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {folders?.map((folders) => (
          <Link
            to={`/app/folder/${folders.folderName.toString()}/${folders.id.toString()}`}
          >
            <FolderCard
              title={folders.folderName}
              image={Image1}
              value="Modified 8m ago"
            ></FolderCard>
          </Link>
        ))}

        {/* <FolderCard
          title="Folder 2"
          image={Image1}
          value="Modified 8m ago"
        ></FolderCard>
        <FolderCard
          title="Folder 3"
          image={Image1}
          value="Modified 8m ago"
        ></FolderCard> */}
      </div>

      <div class="max-w-full mb-6">
        <label class="flex justify-center w-full h-32 px-4 transition bg-white dark:bg-gray-800 border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
          <span class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span class="font-medium text-gray-600">
              Drop files to Attach, or
              <span class="text-blue-600 underline">browse</span>
            </span>
          </span>
          <input type="file" name="file_upload" class="hidden" />
        </label>
      </div>

      <PageTitle>Your files</PageTitle>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Own</TableCell>
              <TableCell>File Size</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((user, i) => (
              <TableRow>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <PhotoIcon className="h-8 text-red-500 pr-2" />
                    <div>
                      <p className="font-semibold">img.jpg</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ {user.amount}</span>
                </TableCell>
                <TableCell>
                  <Badge type={user.status}>{user.status}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {new Date(user.date).toLocaleDateString()}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>
    </>
  );
}

export default Dashboard;
