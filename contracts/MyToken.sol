pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
//import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

/**
 * @title ERC20DetailedERC20 token
 * @dev The decimals are only for visualization purposes.
 * All the operations are done using the smallest and indivisible token unit,
 * just as on Ethereum all the operations are done in wei.
 */
contract MyToken is ERC20, ERC20Detailed, Ownable {
  
  constructor(
    string memory _name,
	string memory _symbol,
	uint8 _decimals,
    uint256 _initialSupply
  ) 
    ERC20Detailed(_name, _symbol, _decimals)
    public
  {
    _mint(msg.sender, _initialSupply * 10 ** uint256(_decimals));
  }

}