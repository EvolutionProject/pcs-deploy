const WBNB = artifacts.require("WBNB");
const fs = require('fs');

module.exports = async function(deployer) {    
    await deployer.deploy(WBNB);

    let instance = await WBNB.deployed()
    let wbnb = {"address": (await instance.address).toString()}
    let data = JSON.stringify(wbnb, null, 2);
    fs.writeFileSync('../../artifacts/wbnb.json', data)
};