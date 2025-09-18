// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract GuildTacticsVault is SepoliaConfig {
    using FHE for *;
    
    struct Guild {
        euint32 guildId;
        euint32 targetAmount;
        euint32 currentAmount;
        euint32 memberCount;
        euint32 victoryPoints;
        ebool isActive;
        ebool isVerified;
        string name;
        string description;
        address creator;
        uint256 createdAt;
        uint256 lastActivity;
    }
    
    struct Member {
        euint32 memberId;
        euint32 contributionAmount;
        euint32 skillLevel;
        ebool isActive;
        address memberAddress;
        uint256 joinedAt;
        uint256 lastContribution;
    }
    
    struct Tournament {
        euint32 tournamentId;
        euint32 entryFee;
        euint32 prizePool;
        euint32 participantCount;
        ebool isActive;
        string name;
        string description;
        address organizer;
        uint256 startTime;
        uint256 endTime;
        uint256 registrationDeadline;
    }
    
    struct Battle {
        euint32 battleId;
        euint32 guild1Id;
        euint32 guild2Id;
        euint32 winnerId;
        euint32 battlePoints;
        ebool isCompleted;
        address referee;
        uint256 startTime;
        uint256 endTime;
    }
    
    mapping(uint256 => Guild) public guilds;
    mapping(uint256 => mapping(uint256 => Member)) public guildMembers;
    mapping(uint256 => Tournament) public tournaments;
    mapping(uint256 => Battle) public battles;
    mapping(address => euint32) public playerReputation;
    mapping(address => euint32) public guildReputation;
    
    uint256 public guildCounter;
    uint256 public tournamentCounter;
    uint256 public battleCounter;
    uint256 public memberCounter;
    
    address public owner;
    address public verifier;
    
    event GuildCreated(uint256 indexed guildId, address indexed creator, string name);
    event MemberJoined(uint256 indexed guildId, address indexed member);
    event TournamentCreated(uint256 indexed tournamentId, address indexed organizer, string name);
    event BattleStarted(uint256 indexed battleId, uint256 indexed guild1Id, uint256 indexed guild2Id);
    event BattleCompleted(uint256 indexed battleId, uint256 indexed winnerId);
    event ContributionMade(uint256 indexed guildId, address indexed member, uint32 amount);
    event ReputationUpdated(address indexed user, uint32 reputation);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function createGuild(
        string memory _name,
        string memory _description,
        uint256 _targetAmount
    ) public returns (uint256) {
        require(bytes(_name).length > 0, "Guild name cannot be empty");
        require(_targetAmount > 0, "Target amount must be positive");
        
        uint256 guildId = guildCounter++;
        
        guilds[guildId] = Guild({
            guildId: FHE.asEuint32(0), // Will be set properly later
            targetAmount: FHE.asEuint32(0), // Will be set to actual value via FHE operations
            currentAmount: FHE.asEuint32(0),
            memberCount: FHE.asEuint32(0),
            victoryPoints: FHE.asEuint32(0),
            isActive: FHE.asEbool(true),
            isVerified: FHE.asEbool(false),
            name: _name,
            description: _description,
            creator: msg.sender,
            createdAt: block.timestamp,
            lastActivity: block.timestamp
        });
        
        emit GuildCreated(guildId, msg.sender, _name);
        return guildId;
    }
    
    function joinGuild(
        uint256 guildId,
        externalEuint32 skillLevel,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(guilds[guildId].creator != address(0), "Guild does not exist");
        require(FHE.decrypt(guilds[guildId].isActive), "Guild is not active");
        
        // Verify the skill level proof
        euint32 encryptedSkillLevel = FHE.verify(inputProof, skillLevel);
        
        uint256 memberId = memberCounter++;
        
        guildMembers[guildId][memberId] = Member({
            memberId: FHE.asEuint32(0), // Will be set properly later
            contributionAmount: FHE.asEuint32(0),
            skillLevel: encryptedSkillLevel,
            isActive: FHE.asEbool(true),
            memberAddress: msg.sender,
            joinedAt: block.timestamp,
            lastContribution: block.timestamp
        });
        
        // Update guild member count (encrypted)
        guilds[guildId].memberCount = guilds[guildId].memberCount + FHE.asEuint32(1);
        guilds[guildId].lastActivity = block.timestamp;
        
        emit MemberJoined(guildId, msg.sender);
        return memberId;
    }
    
    function contributeToGuild(
        uint256 guildId,
        externalEuint32 amount,
        bytes calldata inputProof
    ) public payable returns (bool) {
        require(guilds[guildId].creator != address(0), "Guild does not exist");
        require(FHE.decrypt(guilds[guildId].isActive), "Guild is not active");
        require(msg.value > 0, "Contribution must be positive");
        
        // Verify the contribution amount proof
        euint32 encryptedAmount = FHE.verify(inputProof, amount);
        
        // Update guild current amount (encrypted)
        guilds[guildId].currentAmount = guilds[guildId].currentAmount + encryptedAmount;
        guilds[guildId].lastActivity = block.timestamp;
        
        // Update member contribution (encrypted)
        // Note: In a real implementation, you'd need to find the member's ID
        // This is simplified for demonstration
        
        // Update player reputation (encrypted)
        playerReputation[msg.sender] = playerReputation[msg.sender] + encryptedAmount;
        
        emit ContributionMade(guildId, msg.sender, FHE.decrypt(encryptedAmount));
        return true;
    }
    
    function createTournament(
        string memory _name,
        string memory _description,
        uint256 _entryFee,
        uint256 _duration,
        uint256 _registrationDeadline
    ) public payable returns (uint256) {
        require(bytes(_name).length > 0, "Tournament name cannot be empty");
        require(_entryFee > 0, "Entry fee must be positive");
        require(_duration > 0, "Duration must be positive");
        require(_registrationDeadline > block.timestamp, "Registration deadline must be in the future");
        
        uint256 tournamentId = tournamentCounter++;
        
        tournaments[tournamentId] = Tournament({
            tournamentId: FHE.asEuint32(0), // Will be set properly later
            entryFee: FHE.asEuint32(0), // Will be set to actual value via FHE operations
            prizePool: FHE.asEuint32(0),
            participantCount: FHE.asEuint32(0),
            isActive: FHE.asEbool(true),
            name: _name,
            description: _description,
            organizer: msg.sender,
            startTime: block.timestamp,
            endTime: block.timestamp + _duration,
            registrationDeadline: _registrationDeadline
        });
        
        emit TournamentCreated(tournamentId, msg.sender, _name);
        return tournamentId;
    }
    
    function startBattle(
        uint256 guild1Id,
        uint256 guild2Id,
        externalEuint32 battlePoints,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(guilds[guild1Id].creator != address(0), "Guild 1 does not exist");
        require(guilds[guild2Id].creator != address(0), "Guild 2 does not exist");
        require(FHE.decrypt(guilds[guild1Id].isActive), "Guild 1 is not active");
        require(FHE.decrypt(guilds[guild2Id].isActive), "Guild 2 is not active");
        require(guild1Id != guild2Id, "Cannot battle same guild");
        
        // Verify the battle points proof
        euint32 encryptedBattlePoints = FHE.verify(inputProof, battlePoints);
        
        uint256 battleId = battleCounter++;
        
        battles[battleId] = Battle({
            battleId: FHE.asEuint32(0), // Will be set properly later
            guild1Id: FHE.asEuint32(guild1Id),
            guild2Id: FHE.asEuint32(guild2Id),
            winnerId: FHE.asEuint32(0), // Will be set when battle completes
            battlePoints: encryptedBattlePoints,
            isCompleted: FHE.asEbool(false),
            referee: msg.sender,
            startTime: block.timestamp,
            endTime: 0 // Will be set when battle completes
        });
        
        emit BattleStarted(battleId, guild1Id, guild2Id);
        return battleId;
    }
    
    function completeBattle(
        uint256 battleId,
        uint256 winnerId,
        externalEuint32 victoryPoints,
        bytes calldata inputProof
    ) public returns (bool) {
        require(battles[battleId].referee != address(0), "Battle does not exist");
        require(!FHE.decrypt(battles[battleId].isCompleted), "Battle already completed");
        require(msg.sender == battles[battleId].referee, "Only referee can complete battle");
        
        // Verify the victory points proof
        euint32 encryptedVictoryPoints = FHE.verify(inputProof, victoryPoints);
        
        // Update battle
        battles[battleId].winnerId = FHE.asEuint32(winnerId);
        battles[battleId].isCompleted = FHE.asEbool(true);
        battles[battleId].endTime = block.timestamp;
        
        // Update winner guild victory points (encrypted)
        guilds[winnerId].victoryPoints = guilds[winnerId].victoryPoints + encryptedVictoryPoints;
        guilds[winnerId].lastActivity = block.timestamp;
        
        // Update guild reputation (encrypted)
        guildReputation[guilds[winnerId].creator] = guildReputation[guilds[winnerId].creator] + encryptedVictoryPoints;
        
        emit BattleCompleted(battleId, winnerId);
        return true;
    }
    
    function getGuildInfo(uint256 guildId) public view returns (
        string memory name,
        string memory description,
        uint256 targetAmount,
        uint256 currentAmount,
        uint256 memberCount,
        uint256 victoryPoints,
        bool isActive,
        bool isVerified,
        address creator,
        uint256 createdAt
    ) {
        require(guilds[guildId].creator != address(0), "Guild does not exist");
        
        Guild storage guild = guilds[guildId];
        return (
            guild.name,
            guild.description,
            FHE.decrypt(guild.targetAmount),
            FHE.decrypt(guild.currentAmount),
            FHE.decrypt(guild.memberCount),
            FHE.decrypt(guild.victoryPoints),
            FHE.decrypt(guild.isActive),
            FHE.decrypt(guild.isVerified),
            guild.creator,
            guild.createdAt
        );
    }
    
    function getGuildMembers(uint256 guildId) public view returns (address[] memory) {
        require(guilds[guildId].creator != address(0), "Guild does not exist");
        
        uint256 memberCount = FHE.decrypt(guilds[guildId].memberCount);
        address[] memory members = new address[](memberCount);
        
        // Note: This is a simplified implementation
        // In a real implementation, you'd need to track member addresses properly
        // This would require additional storage mappings
        
        return members;
    }
    
    function getPlayerReputation(address player) public view returns (uint256) {
        return FHE.decrypt(playerReputation[player]);
    }
    
    function getGuildReputation(address guildCreator) public view returns (uint256) {
        return FHE.decrypt(guildReputation[guildCreator]);
    }
    
    // Admin functions
    function verifyGuild(uint256 guildId, bool isVerified) public {
        require(msg.sender == verifier, "Only verifier can verify guilds");
        require(guilds[guildId].creator != address(0), "Guild does not exist");
        
        guilds[guildId].isVerified = FHE.asEbool(isVerified);
    }
    
    function updateReputation(address user, uint32 reputation) public {
        require(msg.sender == owner, "Only owner can update reputation");
        
        playerReputation[user] = FHE.asEuint32(reputation);
        emit ReputationUpdated(user, reputation);
    }
    
    // Emergency functions
    function emergencyWithdraw() public {
        require(msg.sender == owner, "Only owner can emergency withdraw");
        payable(owner).transfer(address(this).balance);
    }
    
    function pauseGuild(uint256 guildId) public {
        require(msg.sender == owner, "Only owner can pause guilds");
        require(guilds[guildId].creator != address(0), "Guild does not exist");
        
        guilds[guildId].isActive = FHE.asEbool(false);
    }
    
    function unpauseGuild(uint256 guildId) public {
        require(msg.sender == owner, "Only owner can unpause guilds");
        require(guilds[guildId].creator != address(0), "Guild does not exist");
        
        guilds[guildId].isActive = FHE.asEbool(true);
    }
}
