const MyToken = artifacts.require("./MyToken.sol");
const MyTokenCrowdsale = artifacts.require("./MyTokenCrowdsale.sol");

const web3 = require("web3-utils");

module.exports = (deployer, network, [owner]) => {

  const _name = "My Token TRC20";
  const _symbol = "MYT";
  const _decimals = 18;
  const _initialSupply = 16000000;
  const _rate = 500;
  const _crowdsaleTokens = web3.toWei("8000000", "ether");
  	
  return deployer
	.then(() => deployer.deploy(MyToken, _name, _symbol, _decimals, _initialSupply))
	.then(() => deployer.deploy(MyTokenCrowdsale, _rate, owner, MyToken.address, owner))
	.then(() => MyToken.deployed())
	.then(token => token.approve(MyTokenCrowdsale.address, _crowdsaleTokens ));
};