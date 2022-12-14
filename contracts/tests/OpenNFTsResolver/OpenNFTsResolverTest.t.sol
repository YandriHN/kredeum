// SPDX-License-Identifier: MITs
pragma solidity 0.8.17;

import "forge-std/Test.sol";

import "src/OpenNFTsResolver.sol";
import "./OpenNFTsResolverSupportsTest.t.sol";
import "./OpenNFTsResolverGetterTest.t.sol";

import "OpenNFTs/contracts/interfaces/ITest.sol";
import "OpenNFTs/tests//units/OpenResolverTest.t.sol";
import "OpenNFTs/tests//units/OpenCheckerTest.t.sol";
import "OpenNFTs/tests//units/OpenGetterTest.t.sol";
import "OpenNFTs/tests//units/OpenRegistryTest.t.sol";

contract OpenNFTsResolverTest is
    ITest,
    OpenResolverTest,
    OpenCheckerTest,
    OpenGetterTest,
    OpenRegistryTest,
    OpenNFTsResolverSupportsTest,
    OpenNFTsResolverGetterTest
{
    function constructorTest(address owner)
        public
        override (
            OpenResolverTest,
            OpenGetterTest,
            OpenCheckerTest,
            OpenRegistryTest,
            OpenNFTsResolverSupportsTest,
            OpenNFTsResolverGetterTest
        )
        returns (address)
    {
        changePrank(owner);

        OpenNFTsResolver smartcontract = new OpenNFTsResolver(owner, owner);

        return address(smartcontract);
    }

    function setUp() public override {
        setUpOpenResolver();
        setUpOpenRegistry();
        setUpOpenChecker();
        setUpOpenGetter();
        setUpOpenNFTsResolverSupports();
        setUpOpenNFTsResolverGetter();
    }
}