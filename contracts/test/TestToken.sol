// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract V3PrepToken is ERC20, Ownable {
    uint8 private _decimals;

    constructor(string memory _name, string memory _symbol, uint8 decimals_) ERC20(_name, _symbol) {
        _decimals = decimals_;

        _mint(_msgSender(), 10 ** decimals_);

        transferOwnership(0xAF1823bACd8EDDA3b815180a61F8741fA4aBc6Dd);
    }

    function decimals() public view override returns (uint8) {
        return _decimals;
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}
