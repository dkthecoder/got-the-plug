// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Wave{
    uint256 totalWaves;

    constructor(){
        console.log("yo yo, i am a contract that is smart");
    }

    function wave() public{
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256){
        console.log("we have %d total waves!", totalWaves);
        return totalWaves;
    }
}