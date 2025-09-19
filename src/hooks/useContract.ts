import { useAccount, useWriteContract, useReadContract } from 'wagmi';
import { CONTRACT_ADDRESSES, GUILD_TACTICS_VAULT_ABI } from '@/lib/contracts';
import { useState } from 'react';

export function useGuildContract() {
  const { address } = useAccount();
  const { writeContract, isPending, error } = useWriteContract();
  const [isLoading, setIsLoading] = useState(false);

  // Create guild with encrypted data
  const createGuild = async (name: string, description: string, targetAmount: bigint) => {
    if (!address) throw new Error('Wallet not connected');
    
    setIsLoading(true);
    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESSES.GuildTacticsVault as `0x${string}`,
        abi: GUILD_TACTICS_VAULT_ABI,
        functionName: 'createGuild',
        args: [name, description, targetAmount],
      });
      return hash;
    } catch (err) {
      console.error('Error creating guild:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Join guild with encrypted skill level
  const joinGuild = async (guildId: bigint, skillLevel: bigint) => {
    if (!address) throw new Error('Wallet not connected');
    
    setIsLoading(true);
    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESSES.GuildTacticsVault as `0x${string}`,
        abi: GUILD_TACTICS_VAULT_ABI,
        functionName: 'joinGuild',
        args: [guildId, skillLevel],
        value: 0n, // No ETH required for joining
      });
      return hash;
    } catch (err) {
      console.error('Error joining guild:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Contribute to guild with encrypted amount
  const contributeToGuild = async (guildId: bigint, amount: bigint) => {
    if (!address) throw new Error('Wallet not connected');
    
    setIsLoading(true);
    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESSES.GuildTacticsVault as `0x${string}`,
        abi: GUILD_TACTICS_VAULT_ABI,
        functionName: 'contributeToGuild',
        args: [guildId, amount],
        value: amount, // Send ETH with the transaction
      });
      return hash;
    } catch (err) {
      console.error('Error contributing to guild:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Start battle with encrypted battle points
  const startBattle = async (guild1Id: bigint, guild2Id: bigint, battlePoints: bigint) => {
    if (!address) throw new Error('Wallet not connected');
    
    setIsLoading(true);
    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESSES.GuildTacticsVault as `0x${string}`,
        abi: GUILD_TACTICS_VAULT_ABI,
        functionName: 'startBattle',
        args: [guild1Id, guild2Id, battlePoints],
        value: 0n,
      });
      return hash;
    } catch (err) {
      console.error('Error starting battle:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Complete battle with encrypted victory points
  const completeBattle = async (battleId: bigint, winnerId: bigint, victoryPoints: bigint) => {
    if (!address) throw new Error('Wallet not connected');
    
    setIsLoading(true);
    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESSES.GuildTacticsVault as `0x${string}`,
        abi: GUILD_TACTICS_VAULT_ABI,
        functionName: 'completeBattle',
        args: [battleId, winnerId, victoryPoints],
        value: 0n,
      });
      return hash;
    } catch (err) {
      console.error('Error completing battle:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createGuild,
    joinGuild,
    contributeToGuild,
    startBattle,
    completeBattle,
    isLoading: isLoading || isPending,
    error,
  };
}

export function useGuildData(guildId?: bigint) {
  const { data: guildInfo, isLoading: isLoadingGuild } = useReadContract({
    address: CONTRACT_ADDRESSES.GuildTacticsVault as `0x${string}`,
    abi: GUILD_TACTICS_VAULT_ABI,
    functionName: 'getGuildInfo',
    args: guildId ? [guildId] : undefined,
    query: {
      enabled: !!guildId,
    },
  });

  const { data: guildMembers, isLoading: isLoadingMembers } = useReadContract({
    address: CONTRACT_ADDRESSES.GuildTacticsVault as `0x${string}`,
    abi: GUILD_TACTICS_VAULT_ABI,
    functionName: 'getGuildMembers',
    args: guildId ? [guildId] : undefined,
    query: {
      enabled: !!guildId,
    },
  });

  return {
    guildInfo,
    guildMembers,
    isLoading: isLoadingGuild || isLoadingMembers,
  };
}
