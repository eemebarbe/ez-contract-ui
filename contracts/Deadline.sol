//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Deadline {
    struct Agreement {
        uint256 requestedAmount;
        bool isInvestmentSecured;
        uint256 deadline;
        bool milestoneComplete;
        bool isAgreementComplete;
    }

    mapping(address => mapping(address => Agreement)) private benefactors;

    function createAgreement(
        address benefactor,
        address investor,
        uint256 _requestedAmount,
        uint256 _deadline
    ) public {
        //should only one agreement be able to be made between each set of parties? use transaction nonce to id each transaction?
        //what happens if someone tries to create an agreement at the same address? the nonce needs to be used at least for that purpose, so agreements arent overwritten
        benefactors[benefactor][investor] = Agreement(
            _requestedAmount,
            false,
            _deadline,
            false,
            false
        );
    }

    function secureFunding(address benefactor) public payable {
        Agreement storage thisAgreement = benefactors[benefactor][msg.sender];
        require(thisAgreement.requestedAmount == msg.value);
        thisAgreement.isInvestmentSecured = true;
    }

    function setMilestoneStatus(address benefactor) public {
        benefactors[benefactor][msg.sender].milestoneComplete = true;
    }

    function completeAgreement(address benefactor, address investor) public {
        Agreement storage thisAgreement = benefactors[benefactor][investor];
        require(
            thisAgreement.isInvestmentSecured &&
                !thisAgreement.isAgreementComplete
        );
        require(
            thisAgreement.deadline < block.timestamp ||
                thisAgreement.milestoneComplete
        );
        address receiver = thisAgreement.milestoneComplete
            ? benefactor
            : investor;
        payable(receiver).transfer(thisAgreement.requestedAmount);
        thisAgreement.isAgreementComplete = true;
    }

    function viewAgreement(address benefactor, address investor)
        public
        view
        returns (
            uint256 requestedAmount,
            bool isInvestmentSecured,
            uint256 deadline,
            bool milestoneComplete
        )
    {
        Agreement memory thisAgreement = benefactors[benefactor][investor];
        return (
            thisAgreement.requestedAmount,
            thisAgreement.isInvestmentSecured,
            thisAgreement.deadline,
            thisAgreement.milestoneComplete
        );
    }

    //multi-investor agreements?
    //multi-milestone agreements?

    //NEXT STEPS:
    //deploy and test on ganache
    //write unit tests?
    //create configurations for agreements?
    //build web3 front end

    /* VIEW FUNCTIONS: 
    1. VIEW ALL OF YOUR AGREEMENTS MADE BY A PARTICULAR ADDRESS?
    2. VIEW ALL OF THE INVESTMENTS MADE TO ONE PARTICULAR ADDRESS
    */
}
