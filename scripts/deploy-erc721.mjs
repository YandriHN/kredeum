import hre from "hardhat";
const { ethers } = hre;
const ethscan = hre.network.config.ethscan;

const factory = await ethers.getContractFactory("OpenNFTs");
const contract = await factory.deploy();
console.log(`Contract  ${ethscan}/address/${contract.address}`);

const tx = (await contract.deployed()).deployTransaction;
console.log(`TX        ${ethscan}/tx/${tx.hash}`);

console.log("NFT deployed!");
console.log(await contract.symbol());
console.log(await contract.id());
