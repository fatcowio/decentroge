const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  let txHash, txReceipt;

  const Decentroge = await hre.ethers.getContractFactory("Decentroge");
  const decentroge = await Decentroge.deploy();

  // console.log('company address', companyaddress.address);
  await decentroge.deployed();

  txHash = decentroge.deployTransaction.hash;
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let decentrogeAddress = txReceipt.contractAddress;

  console.log("Decentroge contract address", decentrogeAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
