const PancakeFactory = artifacts.require("PancakeFactory");
const fs = require('fs');

module.exports = async function(deployer) {    
    await deployer.deploy(PancakeFactory, "0x000000000000000000000000000000000000dead");

    let instance = await PancakeFactory.deployed()

    let factory = {"address": (await instance.address).toString(), "init_hash": (await instance.INIT_CODE_PAIR_HASH()).toString().slice(2)}
    let data = JSON.stringify(factory, null, 2);
    fs.writeFileSync('../../artifacts/factory.json', data)
};