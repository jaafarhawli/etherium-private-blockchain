// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract CertificatePK {
    string public publicKey;

    constructor(string memory _publicKey) {
        publicKey = _publicKey;
    }

    function getPublicKey() public view returns (string memory) {
        return publicKey;
    }
}
