import { Button } from "@/components/ui/button";
import { Shield, Swords } from "lucide-react";
import { Link } from "react-router-dom";
import { WalletConnect } from "@/components/wallet-connect";
import guildLogo from "@/assets/guild-tournament-logo.png";

export const GuildHeader = () => {
  return (
    <header className="relative bg-guild-shadow border-b border-guild-stone">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
            <img 
              src={guildLogo} 
              alt="Guild Tournament Logo" 
              className="w-12 h-12 animate-glow-pulse"
            />
            <div>
              <h1 className="text-2xl font-cinzel font-bold text-guild-gold">
                Guild Battles
              </h1>
              <p className="text-sm text-muted-foreground">
                with Encrypted Tactics
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/tournaments" className="flex items-center space-x-2 text-foreground hover:text-guild-gold transition-colors">
              <Swords className="w-4 h-4" />
              <span>Tournaments</span>
            </Link>
            <Link to="/guilds" className="flex items-center space-x-2 text-foreground hover:text-guild-gold transition-colors">
              <Shield className="w-4 h-4" />
              <span>Guilds</span>
            </Link>
          </nav>

          {/* Wallet Connect */}
          <WalletConnect />
        </div>
      </div>
    </header>
  );
};