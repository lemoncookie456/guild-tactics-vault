import { GuildHeader } from "@/components/guild-header";
import { TorchFooter } from "@/components/torch-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Shield, Users, Trophy, Star, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const Guilds = () => {
  const topGuilds = [
    { 
      name: "Dragon's Fury", 
      members: 45, 
      wins: 23, 
      rank: 1, 
      emblem: "🐉",
      leader: "DragonMaster",
      power: 9850,
      specialty: "Aggressive Tactics"
    },
    { 
      name: "Shadow Covenant", 
      members: 38, 
      wins: 21, 
      rank: 2, 
      emblem: "🗡️",
      leader: "NightBlade",
      power: 9720,
      specialty: "Stealth Operations"
    },
    { 
      name: "Phoenix Rising", 
      members: 42, 
      wins: 19, 
      rank: 3, 
      emblem: "🔥",
      leader: "FlameKeeper",
      power: 9380,
      specialty: "Resurrection Strategy"
    },
    { 
      name: "Iron Brotherhood", 
      members: 50, 
      wins: 18, 
      rank: 4, 
      emblem: "⚔️",
      leader: "IronWill",
      power: 9150,
      specialty: "Defensive Mastery"
    },
    { 
      name: "Mystic Scholars", 
      members: 35, 
      wins: 17, 
      rank: 5, 
      emblem: "🔮",
      leader: "WiseOracle",
      power: 8940,
      specialty: "Strategic Planning"
    },
    { 
      name: "Storm Raiders", 
      members: 41, 
      wins: 16, 
      rank: 6, 
      emblem: "⚡",
      leader: "ThunderLord",
      power: 8720,
      specialty: "Swift Assault"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <GuildHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-cinzel font-bold mb-4">
            <span className="text-guild-gold">Guild Rankings</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Discover elite guilds and their encrypted battle strategies
          </p>
          <Link to="/create-guild">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground font-semibold px-8">
              Create Your Guild
            </Button>
          </Link>
        </div>

        {/* Guild Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-guild-shadow/50 p-6 rounded-lg border border-guild-stone text-center">
            <Shield className="w-8 h-8 text-guild-gold mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">247</div>
            <div className="text-sm text-muted-foreground">Active Guilds</div>
          </div>
          <div className="bg-guild-shadow/50 p-6 rounded-lg border border-guild-stone text-center">
            <Users className="w-8 h-8 text-guild-ember mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">8,432</div>
            <div className="text-sm text-muted-foreground">Total Members</div>
          </div>
          <div className="bg-guild-shadow/50 p-6 rounded-lg border border-guild-stone text-center">
            <Trophy className="w-8 h-8 text-guild-purple mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">1,247</div>
            <div className="text-sm text-muted-foreground">Battles Won</div>
          </div>
        </div>

        {/* Top Guilds */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topGuilds.map((guild, index) => (
            <Card key={index} className="bg-guild-shadow/30 border-guild-stone hover:border-guild-gold transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{guild.emblem}</div>
                    <div>
                      <h3 className="font-cinzel font-semibold text-lg text-foreground">{guild.name}</h3>
                      <div className="flex items-center gap-1">
                        {guild.rank <= 3 && <Crown className="w-4 h-4 text-guild-gold" />}
                        <span className="text-sm text-muted-foreground">Rank #{guild.rank}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-guild-gold text-guild-gold">
                    {guild.power}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="text-xs bg-guild-gold text-primary-foreground">
                        {guild.leader[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-muted-foreground">Leader:</span>
                    <span className="text-foreground font-medium">{guild.leader}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Members:</span>
                      <div className="font-semibold text-foreground">{guild.members}/50</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Wins:</span>
                      <div className="font-semibold text-foreground">{guild.wins}</div>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-muted-foreground text-sm">Specialty:</span>
                    <div className="text-sm font-medium text-guild-gold">{guild.specialty}</div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Guild
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-primary">
                  Request Join
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <TorchFooter />
    </div>
  );
};

export default Guilds;