// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";

contract CloneFactory is Ownable {
  address[] _templates;
  address[] _implementations;

  event NewImplementation(
    address implementation,
    uint256 indexed version,
    bool indexed isTemplate,
    address indexed creator
  );

  constructor() {}

  /*
   *  ADD Template
   *
   *  _template : Template to clone
   */
  function addTemplate(address _template) external onlyOwner {
    _templates.push(_template);
    addImplementation(_template, version(), true, owner());
  }

  /*
   *  Clone the Template
   *
   *  returns : Clone Address
   */
  function clone() external returns (address _clone) {
    _clone = Clones.clone(template());
    addImplementation(_clone, version(), false, msg.sender);
  }

  /*
   *  ADD Clone
   *
   *  _clone : existing clone address
   *  _version : existing clone version
   */
  function addClone(
    address _clone,
    uint256 _version,
    address _creator
  ) external onlyOwner {
    require(version() >= 1, "No template yet");

    addImplementation(_clone, _version, false, _creator);
  }

  /*
   *  GET Version
   *
   *  returns : Template Version
   */
  function version() public view returns (uint256) {
    return _templates.length;
  }

  /*
   *  GET Template
   *
   *  returns : Current Template
   */
  function template() public view returns (address) {
    require(version() >= 1, "No template yet");

    return _templates[version() - 1];
  }

  /*
   *  GET Templates
   *
   *  returns : all Templates
   */
  function templates() external view returns (address[] memory) {
    return _templates;
  }

  /*
   *  GET Implementations
   *
   *  returns : all Implementations
   */
  function implementations() external view returns (address[] memory) {
    return _implementations;
  }

  /*
   *  ADD Implementation
   *
   *  _implementation : implementation address
   *  _version : template version
   *  _isTemplate : is template or clone
   *  _creator : creator address
   */
  function addImplementation(
    address _implementation,
    uint256 _version,
    bool _isTemplate,
    address _creator
  ) internal onlyOwner {
    require(_version > 0 && _version <= version(), "Wrong version");

    _implementations.push(_implementation);

    emit NewImplementation(_implementation, _version, _isTemplate, _creator);
  }
}
