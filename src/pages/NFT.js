import React, { useState, useEffect, useContext } from "react";
import { Card, Grid, Row, Text, Loading } from "@nextui-org/react";
import Modals from "../components/Modal/Modal";
import PageTitle from "../components/Typography/PageTitle";
import {
  Input,
  Button,
  HelperText,
  Label,
  Select,
  Textarea,
} from "@windmill/react-ui";
import { AuthContext } from "../utils/AuthProvider";
import { ethers } from "ethers";

export default function NFT() {
  const { address, signer, connect, contract, provider } =
    useContext(AuthContext);

  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
      description: "short descriptions",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "3.00 ETH",
      description: "short descriptions",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
      description: "short descriptions",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
      description: "short descriptions",
    },
    {
      title: "Advocato",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
      description: "short descriptions",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
      description: "short descriptions",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",

      price: "$7.50",
      description: "short descriptions",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      description: "short descriptions",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",

      price: "$7.50",
      description: "short descriptions",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      description: "short descriptions",
    },
  ];

  const [modal, setModal] = useState(false);
  const [assetname, setassetname] = useState("");
  const [assetdescription, setassetdescription] = useState("");
  const [assetprice, setassetprice] = useState("");
  const [asseturl, setasseturl] = useState("");
  const [isloading, setisloading] = useState(false);
  const [isnftready, setisnftready] = useState(false);
  const [nfts, setnfts] = useState([]);
  async function loadNFT() {
    const data = await signer?.fetchMarketItems();
    setnfts(data);
    console.log("nft ----------", data);
  }
  useEffect(() => {
    loadNFT();
  }, [signer, isnftready]);

  const onAddNFT = async () => {
    setisloading(true);

    const price = ethers.utils.parseUnits(assetprice, "ether");

    let listingPrice = await signer.getListingPrice();
    listingPrice = listingPrice.toString();
    // console.log(listingPrice, price.toString());
    let transaction = await signer.createToken(
      asseturl,
      price,
      assetname,
      assetdescription,
      asseturl,
      {
        value: listingPrice,
      }
    );
    await transaction.wait();
    setisloading(false);
    setisnftready(true);
    setModal(false);
  };

  async function buyNft(nft) {
    // console.log(nft.price.toString());
    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    console.log(price.toString());
    // const price = window.web3.utils.toWei(nft.price.toString(), "Ether");
    // const price = ethers.utils.formatUnits(nft.price, "Ether");
    // const gweiValue = ethers.utils.formatUnits(weiValue, "gwei");

    let transaction = await signer.createMarketSale(nft.tokenId, {
      value: nft.price.toString(),
    });
    // const transaction = await contract.createMarketSale(nft.tokenId);
    await transaction.wait();
    alert("nft purchased");
    // loadNFTs();
  }
  return (
    <>
      <Modals
        title={"Upload NFT"}
        state={modal}
        onClick={() => {
          setModal(false);
        }}
        actionButtonDesktop={
          <div className="hidden sm:block">
            <Button
              onClick={() => {
                onAddNFT();
              }}
            >
              {isloading ? (
                <Loading size="xs" color="white" className="pr-4" />
              ) : (
                ""
              )}
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
                onAddNFT();
              }}
            >
              Create
            </Button>
          </div>
        }
      >
        <Label>
          <span>Assets Name</span>
          <Input
            className="mt-1"
            placeholder="assets name"
            value={assetname}
            onChange={(e) => {
              setassetname(e.target.value);
            }}
          />
        </Label>
        <br></br>
        <Label>
          <span>Assets Description</span>
          <Input
            className="mt-1"
            placeholder="assets description"
            value={assetdescription}
            onChange={(e) => {
              setassetdescription(e.target.value);
            }}
          />
        </Label>
        <br></br>

        <Label>
          <span>Assets Price</span>
          <Input
            className="mt-1"
            placeholder="assets price in ETH"
            value={assetprice}
            onChange={(e) => {
              setassetprice(e.target.value);
            }}
          />
        </Label>
        <br></br>

        <Label>
          <span>Assets Image Url</span>
          <Input
            className="mt-1"
            placeholder="asset url"
            value={asseturl}
            onChange={(e) => {
              setasseturl(e.target.value);
            }}
          />
        </Label>
      </Modals>
      <PageTitle>Decentroge NFT Marketplace</PageTitle>
      <div className="w-max">
        <Button
          className="bg-blue-500 mb-3"
          onClick={() => {
            setModal(true);
          }}
        >
          Upload NFT
        </Button>
      </div>
      <div
        className="
            grid md:grid-cols-3 grid-col-2 lg:grid-cols-4 gap-3 "
      >
        {/* <Grid.Container gap={1} justify="flex-start"> */}
        {nfts?.map((item, index) => (
          <div>
            <div
              class="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
              href=""
            >
              <img class="object-cover w-full h-56" src={item.image} alt="" />

              <div class="p-4">
                <div className="flex flex-row items-center justify-between">
                  <h5 class="text-xl font-bold dark:text-white">{item.name}</h5>
                </div>
                <h5 class="text-md font-bold w-9/12 dark:text-white text-white rounded-full px-1 bg-yellow-300 ">
                  {ethers.utils.formatEther(item?.price?.toString())}
                  ETH
                </h5>
                <p class="mt-1 text-sm dark:text-gray-200 text-gray-500">
                  {item.description}
                </p>

                <div
                  onClick={() => buyNft(item)}
                  class=" cursor-pointer inline-block pb-1 mt-2 font-medium t bg-blue-600 py-1 w-full rounded-full text-center text-white "
                >
                  Buy
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* </Grid.Container> */}
      </div>
    </>
  );
}
