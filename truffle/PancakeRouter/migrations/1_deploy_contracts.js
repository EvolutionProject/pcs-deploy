const PancakeRouter01= artifacts.require("PancakeRouter01");
const PancakeRouter= artifacts.require("PancakeRouter");
let FactoryData = require('../../../artifacts/factory.json');
let WBNBData = require('../../../artifacts/wbnb.json');



module.exports = async function(deployer) {   
    await deployer.deploy(PancakeRouter01, FactoryData.address, WBNBData.address);
    await deployer.deploy(PancakeRouter, FactoryData.address, WBNBData.address)
};