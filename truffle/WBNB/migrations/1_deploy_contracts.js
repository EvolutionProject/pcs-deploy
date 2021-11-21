const WBNB = artifacts.require("WBNB");

module.exports = async function(deployer) {    
    await deployer.deploy(WBNB);
};