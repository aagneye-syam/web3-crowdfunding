// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) public campaigns;

    uint256 public numberofCampaigns = 0;

    function createCampaign(address _owner, string memory _title, string memory _description, uint _target,
     uint _deadline, string memory _image ) public returns(uint256) {

    }

    function donateToCampaign() {}

    function getDonators() {}

    function getCampaigns() {}


}
