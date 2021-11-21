const fs = require('fs');
const PancakeFactory = artifacts.require("PancakeFactory");

module.exports = async function(callback) {
    let instance = await PancakeFactory.deployed()

    let factory = {"address": (await instance.address).toString(), "init_hash": (await instance.INIT_CODE_PAIR_HASH()).toString().slice(2)}
    let data = JSON.stringify(factory, null, 2);
    fs.writeFile('../../artifacts/factory.json', data, (err) => {
        if (err) throw err;
        console.log('Factory info written')
    })
}
