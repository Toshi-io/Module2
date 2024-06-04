// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Appointmentrate {

    function PrenupRate(uint _PrenupRate) public pure {
        require(_PrenupRate == 3000, " My Pren-up rate was 3000");
    } 

    function BirthdayRate(uint _BirthdayRate) public pure {
        if (_BirthdayRate != 1500) {
            revert("My Birthday rate was 1500");
        }
    }
    
    function PhotoshootRate(uint _PhotoshootRate) public pure{
        assert(_PhotoshootRate == 2000); 
    }
}
