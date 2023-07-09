// SPDX-License-Identifier: None
pragma solidity 0.8.17;

contract RatingSystem {
    uint256 countID;
    struct Rate {
        address owner;
        uint8 rate;
        bool isActive;
    }

    struct question {
        address Owner;
        string Question;
        uint256 rateId;
        mapping(uint256 => Rate) rate;
        bool isActive;
    }

    mapping(uint256 => question) idToQuestion;

    function addQuestion(string memory _question) external returns (uint256) {
        countID++;
        question storage userQuestion = idToQuestion[countID];
        userQuestion.Owner = msg.sender;
        userQuestion.Question = _question;
        userQuestion.isActive = true;
        return countID;
    }

    function rate(uint256 _questionID, uint8 _rate) external {
        require(_rate >= 1 && _rate <= 5, "");
        question storage userQuestion = idToQuestion[_questionID];
        uint256 rateID = userQuestion.rateId++;
        userQuestion.rate[rateID].owner = msg.sender;
        userQuestion.rate[rateID].rate = _rate;
        userQuestion.rate[rateID].isActive = true;
    }

    function deleteQuestion(uint256 _quesID) external {
        require(idToQuestion[_quesID].Owner == msg.sender, "");
        require(idToQuestion[_quesID].isActive == true, "");
        delete idToQuestion[_quesID];
    }

    function deleteRating(uint256 _quesID, uint256 _rateID) external {
        require(idToQuestion[_quesID].isActive, "");
        require(
            idToQuestion[_quesID].rate[_rateID].owner == msg.sender,
            "The rating owner not matched"
        );
        require(
            idToQuestion[_quesID].rate[_rateID].isActive,
            "The rating already Deleted"
        );
        delete idToQuestion[_quesID].rate[_rateID];
    }

    function getQuestion(
        uint256 _questID
    ) internal view returns (string memory, address) {
        question storage _question = idToQuestion[_questID];
        require(_question.isActive, "Question is deleted");

        return (_question.Question, _question.Owner);
    }

    function getQuestionsRating(
        uint256 _questID,
        uint256 _rateId
    ) internal view returns (uint8, address) {
        question storage _question = idToQuestion[_questID];
        require(_question.isActive, "Question is deleted");
        require(_question.rate[_rateId].isActive, "rating is deleted");

        return (_question.rate[_rateId].rate, _question.rate[_rateId].owner);
    }
}
