// SPDX-License-Identifier: MITs
pragma solidity 0.8.9;

import {OpenNFTsV0} from "../OpenNFTsV0.sol";
import "OpenNFTs/contracts/tests/OpenERC721Test.t.sol";
import "OpenNFTs/contracts/interfaces/ITest.sol";
import {ERC721TransferableTest} from "OpenNFTs/contracts/tests/ERC721TransferableTest.t.sol";

contract OpenNFTsV0Test is ITest, OpenERC721Test, ERC721TransferableTest {
    function constructorTest(address owner) public override(OpenERC721Test, ERC721TransferableTest) returns (address) {
        changePrank(owner);
        OpenNFTsV0 op = new OpenNFTsV0();

        return address(op);
    }

    function mintTest(address collection, address minter)
        public
        override(OpenERC721Test, ERC721TransferableTest)
        returns (uint256, string memory)
    {
        changePrank(minter);
        return (OpenNFTsV0(collection).adddUser(minter, _TOKEN_URI), _TOKEN_URI);
    }

    function burnTest(address collection, uint256 tokenID) public override {}

    function setUp() public override {
        setUpOpenNFTs("Open NFTs", "NFT");
        setUpERC721Transferable();
    }
}
