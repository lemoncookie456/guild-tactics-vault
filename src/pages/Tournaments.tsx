import { GuildHeader } from "@/components/guild-header";
import { TournamentBracket } from "@/components/tournament-bracket";
import { TorchFooter } from "@/components/torch-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Clock, Coins } from "lucide-react";

const Tournaments = () => {
  return (
    <div className="min-h-screen bg-background">
      <GuildHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-cinzel font-bold mb-4">
            <span className="text-guild-gold">Active Tournaments</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join elite guild battles with encrypted strategies and blockchain rewards
          </p>
        </div>

        {/* Tournament Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-guild-shadow/50 p-6 rounded-lg border border-guild-stone text-center">
            <Trophy className="w-8 h-8 text-guild-gold mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">12</div>
            <div className="text-sm text-muted-foreground">Active Tournaments</div>
          </div>
          <div className="bg-guild-shadow/50 p-6 rounded-lg border border-guild-stone text-center">
            <Users className="w-8 h-8 text-guild-ember mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">347</div>
            <div className="text-sm text-muted-foreground">Participating Guilds</div>
          </div>
          <div className="bg-guild-shadow/50 p-6 rounded-lg border border-guild-stone text-center">
            <Clock className="w-8 h-8 text-guild-purple mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">2h 34m</div>
            <div className="text-sm text-muted-foreground">Next Tournament</div>
          </div>
          <div className="bg-guild-shadow/50 p-6 rounded-lg border border-guild-stone text-center">
            <Coins className="w-8 h-8 text-guild-gold mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">50,000</div>
            <div className="text-sm text-muted-foreground">Total Prize Pool</div>
          </div>
        </div>

        {/* Tournament List */}
        <div className="grid gap-6 mb-8">
          {[
            { name: "Champions League", status: "Live", prize: "15,000", participants: 32, timeLeft: "2h 15m" },
            { name: "Guild Masters Cup", status: "Starting Soon", prize: "25,000", participants: 16, timeLeft: "4h 30m" },
            { name: "Elite Warfare", status: "Registration", prize: "10,000", participants: 24, timeLeft: "1d 12h" }
          ].map((tournament, index) => (
            <div key={index} className="bg-guild-shadow/30 p-6 rounded-lg border border-guild-stone hover:border-guild-gold transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-cinzel font-semibold text-foreground">{tournament.name}</h3>
                    <Badge variant={tournament.status === "Live" ? "default" : tournament.status === "Starting Soon" ? "secondary" : "outline"}>
                      {tournament.status}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>Prize Pool: {tournament.prize} ETH</span>
                    <span>Participants: {tournament.participants}/64</span>
                    <span>Time: {tournament.timeLeft}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">View Details</Button>
                  <Button size="sm" className="bg-gradient-primary">Join Tournament</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <TournamentBracket />
      </main>

      <TorchFooter />
    </div>
  );
};

export default Tournaments;