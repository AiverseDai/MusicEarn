// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

    address admin;

    constructor () ERC20("Music Earn", "MKT") {
        _mint(msg.sender, 100 * (10 ** uint256(decimals())));
        admin = msg.sender;
    }
    
    function mint(uint amt,address to) public returns (bool) {
        require(msg.sender==admin,"only admin");
        _mint( to, amt * (10 ** uint256(decimals())));
        return true;
    }
}
