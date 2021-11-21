const fs = require('fs');

const WBNB = artifacts.require("WBNB");

module.exports = async function(callback) {
    let instance = await WBNB.deployed()
    let wbnb = {"address": (await instance.address).toString()}
    let data = JSON.stringify(wbnb, null, 2);
    fs.writeFile('../../artifacts/wbnb.json', data, (err) => {
        if (err) throw err;
        console.log('WBNB info written')
    })
}