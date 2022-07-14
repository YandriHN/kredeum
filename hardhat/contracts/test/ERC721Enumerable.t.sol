// SPDX-License-Identifier: MITs
pragma solidity 0.8.9;

import "../../lib/forge-std/src/Test.sol";

import "../interfaces/IERC721Enumerable.sol";
import "../interfaces/IERC165.sol";

abstract contract ERC721EnumerableTest is Test {
    address private _collection;
    string private _tokenURI;
    address private owner = address(0x2);
    address private minter = address(0x22);
    address private tester = address(0x4);
    uint256 private _tokenID0;

    function constructorTest(address owner_) public virtual returns (address);

    function mintTest(address collection_, address minter_) public virtual returns (uint256);

    function setUpERC721Enumerable() public {
        _collection = constructorTest(owner);
        _tokenID0 = mintTest(_collection, minter);
    }

    function testERC721EnumerableTotalSupply() public {
        assertEq(IERC721Enumerable(_collection).totalSupply(), 1);
        mintTest(_collection, tester);
        assertEq(IERC721Enumerable(_collection).totalSupply(), 2);
    }

    function testERC721EnumerableTokenByIndex() public {
        assertEq(IERC721Enumerable(_collection).tokenByIndex(0), _tokenID0);
        uint256 tokenID1 = mintTest(_collection, tester);
        assertEq(IERC721Enumerable(_collection).tokenByIndex(1), tokenID1);
    }

    function testERC721EnumerableTokenOfOwnerByIndex() public {
        assertEq(IERC721Enumerable(_collection).tokenOfOwnerByIndex(minter, 0), _tokenID0);
        changePrank(tester);
        uint256 tokenID = mintTest(_collection, tester);
        assertEq(IERC721Enumerable(_collection).tokenOfOwnerByIndex(tester, 0), tokenID);
    }

    function testERC721EnumerableSupportsInterface() public {
        assertTrue(IERC165(_collection).supportsInterface(type(IERC721Enumerable).interfaceId));
    }
}
