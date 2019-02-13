pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";

/**
 * @title ERC20DetailedERC20 token
 * @dev The decimals are only for visualization purposes.
 * All the operations are done using the smallest and indivisible token unit,
 * just as on Ethereum all the operations are done in wei.
 */
contract MyToken is ERC20, ERC20Detailed {
  
  // using SafeMath for uint256;

  uint8 public constant DECIMALS = 18;
  uint256 public constant INITIAL_SUPPLY = 15000000 * (10 ** uint256(DECIMALS));

  // Constructor that gives msg.sender all of existing tokens.
  // We inherited the ERC20Detailed 
  constructor(string memory _name, string memory _symbol, uint8 _decimals) 
  ERC20Detailed(_name, _symbol, _decimals)
  public {
      _mint(msg.sender, INITIAL_SUPPLY);
  }

}