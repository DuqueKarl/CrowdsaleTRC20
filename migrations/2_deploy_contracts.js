/*
var MyToken = artifacts.require("./MyToken.sol");
var MyTokenCrowdsale = artifacts.require("./MyTokenCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
  const _name = "My Token TRC20";
  const _symbol = "MYT";
  const _decimal = 18;
  const _rate = 500;

  deployer.deploy(MyToken, _name, _symbol, _decimal).then(function() {
	return deployer.deploy(MyTokenCrowdsale, _rate, accounts[0], MyToken.address);
  });
};
*/

/*
const MyToken = artifacts.require("./MyToken.sol");
const MyTokenCrowdsale = artifacts.require("./MyTokenCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
  const _name = "My Token TRC20";
  const _symbol = "MYT";
  const _decimal = 18;
  const _rate = 500;
  const _wallet = "0x169397F515Af9E93539e0F483f8A6FC115de660C"; //accounts[0];
    
  return deployer
    .then(() => {
      return deployer.deploy(MyToken, _name, _symbol, _decimal);
    })
    .then(() => {
      return deployer.deploy(MyTokenCrowdsale, _rate, _wallet, MyToken.address);
    });
};
*/

const MyToken = artifacts.require("./MyToken.sol");
const MyTokenCrowdsale = artifacts.require("./MyTokenCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
    const _name = "My Token TRC20";
    const _symbol = "MYT";
    const _decimals = 18;
    const _rate = 500;
	const _wallet = accounts[0];

    deployer.deploy(MyToken, _name, _symbol, _decimals)
        .then(function () {
             return deployer.deploy(MyTokenCrowdsale, _rate, _wallet, MyToken.address);
        });
};