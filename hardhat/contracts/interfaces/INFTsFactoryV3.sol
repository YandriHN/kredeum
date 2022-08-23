// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface INFTsFactoryV3 {
    event Clone(string indexed templateName, address indexed clone, string indexed name, string symbol, bool[] options);

    event SetResolver(address indexed resolver);

    event SetTemplate(string indexed templateName, address indexed template, uint256 index);

    function setResolver(address resolver) external;

    function setTemplate(string memory templateName, address template) external;

    function clone(
        string memory name,
        string memory symbol,
        string memory templateName,
        bool[] memory options
    ) external returns (address);

    function template(string memory templateName) external view returns (address);

    function templates(uint256 num) external view returns (address);

    function countTemplates() external view returns (uint256);
}
