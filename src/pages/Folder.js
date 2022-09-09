import React, { useState, useEffect, useContext } from "react";
import { FolderOpenIcon } from "@heroicons/react/24/solid";
import { useParams } from "react-router-dom";
import PageTitle from "../components/Typography/PageTitle";
// import { NFTStorage } from "https://cdn.jsdelivr.net/npm/nft.storage/dist/bundle.esm.min.js";
import { Web3Storage } from "web3.storage";
import axios from "axios";
// import { Web3Storage } from "web3.storage/dist/bundle.esm.min.js.map";
import response from "../utils/demo/tableData";
import Modals from "../components/Modal/Modal";
import { Input, HelperText, Label, Select, Textarea } from "@windmill/react-ui";
import FileDetail from "../components/Modal/FileDetail";
import FileViewer from "react-file-viewer";
// import { CustomErrorComponent } from "custom-error";
import { AuthContext } from "../utils/AuthProvider";
// import { create as ipfsHttpClient } from "ipfs-http-client";

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

function getAccessToken() {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDNCQzQzMDliYTJGRGIxMDZGZWM0YzJGMTJiZmE4RTMwQTUzMTZiZDUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjI0OTA3ODUyMjUsIm5hbWUiOiJkZWNlbnRyb2dlIn0.kcD-OCoPPtPAYR9Ph_cOfz0A9Jl_KamPPmo20j0Q1Dc";
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

function Dashboard() {
  const projectId = "2DB3mQQJtzIC03GYarET8tFZJIm"; //(Step 3. Place the project id from your infura project)
  const projectSecret = "0dedd8064ff788414096e72cc7e3f4a1"; //(Step 4. Place the project_secrect from your infura project)
  const auth =
    "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

  // const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");
  const ipfsClient = require("ipfs-http-client");
  console.log(auth);
  const ipfs = ipfsClient.create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    apiPath: "/api/v0",
    headers: {
      authorization: auth,
    },
  });

  const { address, signer, contract, provider, chainId, connect } =
    useContext(AuthContext);
  let { foldername, id } = useParams();
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [file, setFile] = useState("");
  const [filetype, setfiletype] = useState("");
  const [filesize, setfilesize] = useState("");
  // console.log(foldername, id);
  const [modal, setModal] = useState(false);
  const [fileModal, setFileModal] = useState(false);
  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  async function loadfiles() {
    const data = await signer?.getFiles(id);
    // console.log(data);
    console.log("files ----------", data);
  }

  useEffect(() => {
    loadfiles();
  }, [signer]);

  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  function getExtension() {
    return filetype.split(".").pop();
  }

  console.log("extension", getExtension());
  async function onChangeCoverImage(e) {
    const files = e.target.files[0];
    const client = makeStorageClient();
    const cid = await client.put([files]);
    console.log("stored files with cid:", cid);

    const res = await client.get(cid);
    console.log(`Got a response! [${res.status}] ${res.statusText}`);
    if (!res.ok) {
      throw new Error(
        `failed to get ${cid} - [${res.status}] ${res.statusText}`
      );
    }

    // unpack File objects from the response
    const filess = await res.files();
    setFile(`https://${cid}.ipfs.dweb.link/${files.name}`);
    // console.log(file);
    console.log(files);
    for (const file of filess) {
      setfiletype(file.name);
      setfilesize(file.size);
      console.log(
        `${file.cid} -- ${file.path} -- ${file.size} -- ${file.name}`
      );
    }
    return cid;
  }

  const onError = (err) => {
    console.log("Error:", err); // Write your own logic
  };

  async function onChange(e) {
    const file = e.target.files[0];
    console.log(file);
    try {
      const added = await ipfs.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });

      const url = `https://infura-ipfs.io/ipfs/${added.path}`;
      console.log(url);
      // setFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  const onUploadFile = async () => {
    let transaction = await signer.addFiles(
      id,
      file,
      filesize,
      getExtension(),
      filetype,
      ""
    );
    let txReceipt = await transaction.wait();
    const [transferEvent] = txReceipt.events;
    console.log(transferEvent);
    // const { foldername, _id } = transferEvent.args;
    // history.push(`/app/folder/${foldername.toString()}/${_id.toString()}`);
    // console.log(foldername, _id);
  };

  const sendFileToIPFS = async (e) => {
    // if (fileImg) {
    try {
      // const formData = new FormData();
      // formData.append("file", fileImg);
      const file = e.target.files[0];

      const resFile = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: file,
        headers: {
          pinata_api_key: `${"afc2f2b9810690c58724"}`,
          pinata_secret_api_key: `${"1e676bdcb14b30e75527595c11f5071d8ce192227f95533d67eb6bdba832fda8"}`,
        },
      });

      const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
      console.log(ImgHash);
      //Take a look at your Pinata Pinned section, you will see a new file added to you list.
    } catch (error) {
      console.log("Error sending File to IPFS: ");
      console.log(error);
    }
    // }
  };

  return (
    <>
      <div className="flex flex-row space-x-2  items-center">
        <FolderOpenIcon className="h-16 text-blue-500" />
        <PageTitle>{foldername}</PageTitle>
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
          <input
            type="file"
            name="file_upload"
            class="hidden"
            onChange={onChangeCoverImage}
            // onChange={onChange}
            // onChange={sendFileToIPFS}
          />
        </label>
      </div>
      {file && (
        <FileViewer
          fileType={getExtension()}
          filePath={file}
          // errorComponent={CustomErrorComponent}
          onError={onError}
        />
      )}

      {file && (
        <button
          onClick={() => {
            onUploadFile();
          }}
        >
          Upload
        </button>
      )}
      {/* <FilePreview type={"file"} file={file} onError={onError} /> */}
      {/* {file && <img className="rounded mt-4" width="full" src={file} />} */}
      <PageTitle>Files in {foldername}</PageTitle>

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
