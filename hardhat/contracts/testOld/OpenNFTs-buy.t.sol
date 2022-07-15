// SPDX-License-Identifier: MITs
pragma solidity 0.8.9;

import "./OpenNFTs.t.sol";

contract OpenNFTsBuyTest is OpenNFTsOldTest {
    function testBuyOk() public {
        op.setTokenRoyalty(tokenID0, tester, 100);
        op.setTokenPrice(tokenID0, 1 ether);

        changePrank(buyer);
        deal(buyer, 10 ether);
        uint256 balMinter = minter.balance;

        assertEq(op.ownerOf(tokenID0), minter);
        op.buy{value: 1.5 ether}(tokenID0);
        assertEq(op.ownerOf(tokenID0), buyer);

        assertEq(buyer.balance, 9 ether);
        assertEq(address(op).balance, 0 ether);
        assertEq(tester.balance, 0.01 ether);
        assertEq(minter.balance, balMinter + 0.99 ether);
    }

    function testBuyTwice() public {
        op.setTokenRoyalty(tokenID0, tester, 100);
        op.setTokenPrice(tokenID0, 1 ether);

        changePrank(buyer);
        deal(buyer, 10 ether);

        op.buy{value: 1 ether}(tokenID0);
        vm.expectRevert(bytes("Not to sell"));
        op.buy{value: 1 ether}(tokenID0);
    }

    function testBuyNotEnoughFunds() public {
        op.setTokenRoyalty(tokenID0, tester, 100);
        op.setTokenPrice(tokenID0, 1 ether);

        changePrank(buyer);
        deal(buyer, 10 ether);

        assertEq(op.ownerOf(tokenID0), minter);
        vm.expectRevert(bytes("Not enough funds"));
        op.buy{value: 0.5 ether}(tokenID0);
        assertEq(op.ownerOf(tokenID0), minter);

        assertEq(buyer.balance, 10 ether);
        assertEq(address(op).balance, 0 ether);
        assertEq(tester.balance, 0 ether);
    }

    function testBuyNotToSell() public {
        op.setTokenPrice(tokenID0, 0);

        changePrank(buyer);
        deal(buyer, 10 ether);

        assertEq(op.ownerOf(tokenID0), minter);
        vm.expectRevert(bytes("Not to sell"));
        op.buy{value: 1 ether}(tokenID0);
        assertEq(op.ownerOf(tokenID0), minter);

        assertEq(buyer.balance, 10 ether);
        assertEq(address(op).balance, 0 ether);
        assertEq(tester.balance, 0 ether);
    }
}
