const { network, ethers } = require("hardhat");
const { getNamedAccounts, deployments } = require("hardhat");
const { networks } = require("../hardhat.config");

const developmentChains = ["hardhat", "localhost"];
const INITIAL_SUPPLY = "1000000000000000000000000";
module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const ourToken = await deploy("OurToken", {
    from: deployer,
    log: true,
    args: [INITIAL_SUPPLY],
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  log(`ourToken deployed at ${ourToken.address}`);
};

module.exports.tags = ["all", "token"];
