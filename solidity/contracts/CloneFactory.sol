contract Name {

} // SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import "./interfaces/IContractProbe.sol";

contract CloneFactory is Ownable {
  // implementations : template or clone
  address[] public implementations;
  address public template;

  mapping(address => address) public templates;

  address private contractProbe;

  event NewImplementation(address implementation, address template, address creator);
  event NewTemplate(address template, address creator);

  constructor(address _contractProbe) {
    contractProbe = _contractProbe;
  }

  /*
   *  ADD Implementation onlyOwner
   *
   *  _implementation : Implementation address
   */
  function addImplementation(address _implementation) public onlyOwner {
    _addImplementation(_implementation);
  }

  /*
   *  SET default Template to be Cloned
   *
   *  _template : Template address
   */
  function setDefaultTemplate(address _template) public onlyOwner {
    if (templates[_template] == address(0)) addImplementation(_template);
    require(templates[_template] == _template, "Template is a Clone");

    template = _template;

    emit NewTemplate(_template, msg.sender);
  }

  /*
   *  Implementations count
   *
   *  returns : Number of implementation
   */
  function implementationsCount() public view returns (uint256 count) {
    return implementations.length;
  }

  /*
   *  ADD Implementation internal
   *
   *  _implementation : Implementation address
   */
  function _addImplementation(address _implementation) internal {
    require(templates[_implementation] == address(0), "Implementation already exists");

    (bool _isContract, address _template) = IContractProbe(contractProbe).probe(_implementation);

    require(_isContract, "Implementation is not a Contract");

    implementations.push(_implementation);
    templates[_implementation] = _template;

    emit NewImplementation(_implementation, _template, msg.sender);
  }

  /*
   *  Clone Template
   *
   *  returns : Clone Address
   */
  function _clone() internal virtual returns (address clone_) {
    require(template != address(0), "Template doesn't exist");

    clone_ = Clones.clone(template);
    _addImplementation(clone_);
  }
}