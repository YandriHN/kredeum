// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface INFTsFactoryV2 {
    struct NftData {
        address nft;
        uint256 balanceOf;
        address owner;
        string name;
        string symbol;
        uint256 totalSupply;
    }

    function VERSION() external view returns (uint8);

    function balancesOf(address owner) external view returns (NftData[] memory);

    function clone(
        string memory name,
        string memory symbol,
        string memory templateName,
        bool[] memory options
    ) external returns (address);
}
