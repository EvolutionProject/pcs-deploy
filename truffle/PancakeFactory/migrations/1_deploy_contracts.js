const PancakeFactory = artifacts.require("PancakeFactory");

module.exports = async function(deployer) {    
    await deployer.deploy(PancakeFactory, "0xAA67cfAF882338B97BAecf09F4eE0946Bb1F0106");
};