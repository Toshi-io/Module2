// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract ReactAssessment {
    address public owner;
    uint256 public assessmentCount;

    struct Assessment {
        uint256 id;
        string title;
        string description;
        uint256 timestamp;
    }

    mapping(uint256 => Assessment) public assessments;

    event AssessmentAdded(uint256 id, string title, string description, uint256 timestamp);

    constructor() {
        owner = msg.sender;
        assessmentCount = 0;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    function addAssessment(string memory _title, string memory _description) public onlyOwner {
        assessmentCount++;
        assessments[assessmentCount] = Assessment(assessmentCount, _title, _description, block.timestamp);

        emit AssessmentAdded(assessmentCount, _title, _description, block.timestamp);
    }

    function getAssessment(uint256 _id) public view returns (Assessment memory) {
        require(_id > 0 && _id <= assessmentCount, "Assessment does not exist");
        return assessments[_id];
    }

    function getAllAssessments() public view returns (Assessment[] memory) {
        Assessment[] memory result = new Assessment[](assessmentCount);
        for (uint256 i = 1; i <= assessmentCount; i++) {
            result[i - 1] = assessments[i];
        }
        return result;
    }

    function getAssessmentCount() public view returns (uint256) {
        return assessmentCount;
    }
}
