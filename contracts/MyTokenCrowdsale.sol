pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/crowdsale/Crowdsale.sol";


contract MyTokenCrowdsale is Crowdsale {

	constructor(
	  uint256 _rate,
	  address payable _wallet,
	  ERC20 _token
	)
	  Crowdsale(_rate, _wallet, _token)
	  public
	{
	
	}

}
