import { Button } from "@/components/ui/button";
import { Shield, Lock, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

export const TournamentHero = () => {
  return (
    <section className="relative min-h-[70vh] bg-gradient-hero flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold mb-6">
            <span className="text-guild-gold">Guild Battles</span>
            <br />
            <span className="text-foreground">with Encrypted Tactics</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Where strategies remain hidden until the battle begins. Join elite guilds in tournaments secured by blockchain technology.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex flex-col items-center space-y-3 p-6 bg-guild-shadow/50 rounded-lg border border-guild-stone">
              <Lock className="w-8 h-8 text-guild-gold" />
              <h3 className="font-cinzel font-semibold text-lg">Encrypted Strategies</h3>
              <p className="text-sm text-muted-foreground text-center">
                Guild tactics and member lists remain encrypted until match start
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 bg-guild-shadow/50 rounded-lg border border-guild-stone">
              <Shield className="w-8 h-8 text-guild-ember" />
              <h3 className="font-cinzel font-semibold text-lg">Guild Warfare</h3>
              <p className="text-sm text-muted-foreground text-center">
                Compete in structured tournaments with your guild members
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 bg-guild-shadow/50 rounded-lg border border-guild-stone">
              <Trophy className="w-8 h-8 text-guild-purple" />
              <h3 className="font-cinzel font-semibold text-lg">Blockchain Rewards</h3>
              <p className="text-sm text-muted-foreground text-center">
                Win tournaments and earn verified rewards on the blockchain
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join-tournament">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-6 text-lg animate-glow-pulse">
                Join Tournament
              </Button>
            </Link>
            <Link to="/create-guild">
              <Button variant="outline" size="lg" className="border-guild-gold text-guild-gold hover:bg-guild-gold hover:text-primary-foreground px-8 py-6 text-lg">
                Create Guild
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};