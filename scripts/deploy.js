const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying GuildTacticsVault contract...");

  // Get the contract factory
  const GuildTacticsVault = await ethers.getContractFactory("GuildTacticsVault");
  
  // Deploy the contract
  // Note: You'll need to provide a verifier address for the constructor
  const verifierAddress = "0x0000000000000000000000000000000000000000"; // Replace with actual verifier address
  
  const guildTacticsVault = await GuildTacticsVault.deploy(verifierAddress);
  
  await guildTacticsVault.waitForDeployment();
  
  const contractAddress = await guildTacticsVault.getAddress();
  
  console.log("GuildTacticsVault deployed to:", contractAddress);
  console.log("Verifier address:", verifierAddress);
  
  // Save deployment info
  const deploymentInfo = {
    contractAddress: contractAddress,
    verifierAddress: verifierAddress,
    network: "sepolia",
    timestamp: new Date().toISOString(),
  };
  
  console.log("\nDeployment Information:");
  console.log(JSON.stringify(deploymentInfo, null, 2));
  
  console.log("\nNext steps:");
  console.log("1. Update VITE_GUILD_TACTICS_VAULT_ADDRESS in your environment variables");
  console.log("2. Verify the contract on Etherscan");
  console.log("3. Test the contract functions");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
