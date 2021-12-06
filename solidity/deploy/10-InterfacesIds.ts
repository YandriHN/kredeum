import type { DeployFunction } from "hardhat-deploy/types";

const deployInterfacesIds: DeployFunction = async function ({ deployments, ethers }) {
  const deployer = await ethers.getNamedSigner("deployer");

  await deployments.deploy("InterfacesIds", {
    from: deployer.address,
    args: [],
    log: true
  });
};
deployInterfacesIds.tags = ["InterfacesIds"];
deployInterfacesIds.skip = async ({ getChainId }) => {
  return Number(await getChainId()) != 31337;
};

export default deployInterfacesIds;