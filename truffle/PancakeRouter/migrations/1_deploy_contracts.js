const PancakeRouter01= artifacts.require("PancakeRouter01");
const PancakeRouter= artifacts.require("PancakeRouter");
const FactoryData = require('../../../artifacts/factory.json');
const WBNBData = require('../../../artifacts/wbnb.json');
const fs = require('fs')



module.exports = async function(deployer) {   
    await deployer.deploy(PancakeRouter01, FactoryData.address, WBNBData.address);
    await deployer.deploy(PancakeRouter, FactoryData.address, WBNBData.address)

    let PR01 = await PancakeRouter01.deployed();
    let PR = await PancakeRouter.deployed();

    let prInfo = {"PancakeRouter": {"address": PR.address}, "PancakeRouter01": {"address": PR01.address}}
    let data = JSON.stringify(prInfo, null, 2);
    fs.writeFileSync('../../artifacts/router.json', data)
};