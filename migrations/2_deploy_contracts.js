const MyToken = artifacts.require("./MyToken.sol");
const MyTokenCrowdsale = artifacts.require("./MyTokenCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
  const _name = "My Token TRC20";
  const _symbol = "MYT";
  const _decimals = 18;
  const _initialSupply = 16000000;
  const _rate = 500;
  const _wallet = accounts[0];
  
  let token;
  return deployer
    .then(() => {
      return deployer.deploy(MyToken, _name, _symbol, _decimals, _initialSupply);
    })
    .then((instance) => {
	  token = instance;
      return deployer.deploy(MyTokenCrowdsale, _rate, _wallet, MyToken.address, _wallet);
    })
	.then(() => {
	  token.transferOwnership(MyTokenCrowdsale.address);	  
      token.approve(MyTokenCrowdsale.address, _initialSupply * 1e+18 );
	});		

};