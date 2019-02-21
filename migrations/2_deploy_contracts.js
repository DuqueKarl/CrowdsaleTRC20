const MyToken = artifacts.require("./MyToken.sol");
const MyTokenCrowdsale = artifacts.require("./MyTokenCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
  const _name = "My Token TRC20";
  const _symbol = "MYT";
  const _decimals = 18;
  const _initialSupply = 16000000;
  const _rate = 500;
  const _wallet = accounts[0];
  
  let token, crowdsale;
  return deployer
    .then(() => {
      return deployer.deploy(MyToken, _name, _symbol, _decimals, _initialSupply);
    })
    .then((instance) => {
	  token = instance;
      return deployer.deploy(MyTokenCrowdsale, _rate, _wallet, MyToken.address, _wallet);
    })
	.then((instance) => {
	  crowdsale = instance;
	  token.transferOwnership(crowdsale.address);	  
      token.approve(crowdsale.address, _initialSupply * 10 ** 18 );
	});		

};