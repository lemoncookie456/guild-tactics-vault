import { GuildHeader } from "@/components/guild-header";
import { TorchFooter } from "@/components/torch-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Trophy, Users, Clock, Coins, Shield, Lock, Info } from "lucide-react";

const JoinTournament = () => {
  return (
    <div className="min-h-screen bg-background">
      <GuildHeader />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-cinzel font-bold mb-4">
            <span className="text-guild-gold">Join Tournament</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Register your guild for encrypted tactical warfare
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tournament Selection */}
          <div className="space-y-6">
            <Card className="bg-guild-shadow/30 border-guild-stone">
              <CardHeader>
                <CardTitle className="font-cinzel text-guild-gold">Select Tournament</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { 
                    name: "Champions League", 
                    status: "Registration Open", 
                    prize: "15,000", 
                    timeLeft: "2d 15h",
                    slots: "42/64"
                  },
                  { 
                    name: "Guild Masters Cup", 
                    status: "Starting Soon", 
                    prize: "25,000", 
                    timeLeft: "4h 30m",
                    slots: "16/32"
                  }
                ].map((tournament, index) => (
                  <div key={index} className="p-4 border border-guild-stone rounded-lg hover:border-guild-gold transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-cinzel font-semibold text-foreground">{tournament.name}</h3>
                      <Badge variant="outline" className="border-guild-gold text-guild-gold">
                        {tournament.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-guild-gold" />
                        <span>{tournament.prize} ETH</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-guild-ember" />
                        <span>{tournament.timeLeft}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-guild-purple" />
                        <span>{tournament.slots}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Encryption Info */}
            <Card className="bg-guild-shadow/30 border-guild-stone">
              <CardHeader>
                <CardTitle className="font-cinzel text-guild-gold flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Encryption Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Alert className="border-guild-gold bg-guild-gold/10">
                  <Shield className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    Your guild strategies and member lists will be encrypted using blockchain technology. 
                    Information remains hidden until the tournament match begins.
                  </AlertDescription>
                </Alert>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-guild-gold rounded-full"></div>
                    <span>Member lists encrypted until match start</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-guild-ember rounded-full"></div>
                    <span>Battle strategies remain confidential</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-guild-purple rounded-full"></div>
                    <span>Automatic reveal at tournament start</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <div className="space-y-6">
            <Card className="bg-guild-shadow/30 border-guild-stone">
              <CardHeader>
                <CardTitle className="font-cinzel text-guild-gold">Guild Registration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="guild-name">Guild Name</Label>
                  <Input 
                    id="guild-name" 
                    placeholder="Enter your guild name"
                    className="bg-guild-shadow/50 border-guild-stone"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guild-leader">Guild Leader</Label>
                  <Input 
                    id="guild-leader" 
                    placeholder="Leader username"
                    className="bg-guild-shadow/50 border-guild-stone"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="member-count">Number of Members</Label>
                  <Select>
                    <SelectTrigger className="bg-guild-shadow/50 border-guild-stone">
                      <SelectValue placeholder="Select member count" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-10">5-10 members</SelectItem>
                      <SelectItem value="11-20">11-20 members</SelectItem>
                      <SelectItem value="21-30">21-30 members</SelectItem>
                      <SelectItem value="31-40">31-40 members</SelectItem>
                      <SelectItem value="41-50">41-50 members</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="strategy">Encrypted Strategy (Optional)</Label>
                  <Textarea 
                    id="strategy"
                    placeholder="Describe your guild's battle strategy (will be encrypted)"
                    className="bg-guild-shadow/50 border-guild-stone min-h-[100px]"
                  />
                  <p className="text-xs text-muted-foreground">
                    This information will be encrypted and only revealed at tournament start
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wallet">Wallet Address</Label>
                  <Input 
                    id="wallet" 
                    placeholder="0x..."
                    className="bg-guild-shadow/50 border-guild-stone"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Entry Fee */}
            <Card className="bg-guild-shadow/30 border-guild-stone">
              <CardHeader>
                <CardTitle className="font-cinzel text-guild-gold flex items-center gap-2">
                  <Coins className="w-5 h-5" />
                  Entry Fee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <div className="text-3xl font-bold text-guild-gold mb-2">500 ETH</div>
                  <p className="text-sm text-muted-foreground">
                    Entry fee per guild • Refundable if tournament cancelled
                  </p>
                </div>
                <Button className="w-full bg-gradient-primary text-primary-foreground font-semibold">
                  Register Guild & Pay Entry Fee
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <TorchFooter />
    </div>
  );
};

export default JoinTournament;