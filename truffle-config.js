var HDWalletProvider = require("truffle-hdwallet-provider");

//var mnemonic = 'bus job cloud lyrics match always weasel visit accuse clutch skin lunar';
var mnemonic = 'common system before energy leg style pizza zone monitor twist exile bunker';

module.exports = {
  networks: {
    development: {
      provider: () => new HDWalletProvider(
        mnemonic,
        "http://127.0.0.1:7545",
      ),
      host: "127.0.0.1",
      port: "7545",
	  gas: 6500000,
      network_id: "*", // Match any network id
    },

  ropsten: {
      provider: () => new HDWalletProvider(
	    mnemonic,
		"https://ropsten.infura.io/a93ffc6ff8c54d6d9a9537fab4a75e54",
		0,
		1,
		true,
		"m/44'/889'/0'/0/",
	  ),
      network_id: 3
      //gas: 2000000,
      //gasPrice: 10000000000000,
    },

  tomotestnet: {
      provider: () => new HDWalletProvider(
        mnemonic,
        "https://testnet.tomochain.com",
        0,
        1,
        true,
        "m/44'/889'/0'/0/",
      ),
      network_id: "89",
      gas: 2000000,
      gasPrice: 10000000000000,
    },

  tomomainnet: {
      provider: () => new HDWalletProvider(
        mnemonic,
        "https://rpc.tomochain.com",
        0,
        1,
        true,
        "m/44'/889'/0'/0/",
      ),
      network_id: "88",
      gas: 2000000,
      gasPrice: 10000000000000,
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.0",
    }
  }
};