const { ethers } = require("hardhat");

async function main() {
  const nftMarketplace = await ethers.deployContract("NFTMarketplace");
  await nftMarketplace.waitForDeployment();

  console.log("Contract deployed");
}

main()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
