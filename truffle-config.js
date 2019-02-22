const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "a93ffc6ff8c54d6d9a9537fab4a75e54";

//var mnemonic = 'bus job cloud lyrics match always weasel visit accuse clutch skin lunar';
var mnemonic = 'common system before energy leg style pizza zone monitor twist exile bunker';

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */
   
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
		`https://ropsten.infura.io/${infuraKey}`,
		//"https://ropsten.infura.io/a93ffc6ff8c54d6d9a9537fab4a75e54",
		0,
		1,
		true,
		"m/44'/889'/0'/0/",
	  ),
      network_id: 3,
	  gas: 5500000,
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
      version: "0.5.4",
    }
  }
};