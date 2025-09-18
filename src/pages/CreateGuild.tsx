import { GuildHeader } from "@/components/guild-header";
import { TorchFooter } from "@/components/torch-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Users, Crown, Star, Zap, Swords, Eye } from "lucide-react";

const CreateGuild = () => {
  const guildEmblems = [
    { icon: "🐉", name: "Dragon" },
    { icon: "🗡️", name: "Sword" },
    { icon: "🔥", name: "Fire" },
    { icon: "⚔️", name: "Crossed Swords" },
    { icon: "🔮", name: "Crystal" },
    { icon: "⚡", name: "Lightning" },
    { icon: "🛡️", name: "Shield" },
    { icon: "👑", name: "Crown" },
    { icon: "🦅", name: "Eagle" },
    { icon: "🌟", name: "Star" },
    { icon: "⚡", name: "Thunder" },
    { icon: "🔱", name: "Trident" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <GuildHeader />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-cinzel font-bold mb-4">
            <span className="text-guild-gold">Create Your Guild</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Forge a new guild and lead warriors into encrypted tournament battles
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Guild Basic Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-guild-shadow/30 border-guild-stone">
              <CardHeader>
                <CardTitle className="font-cinzel text-guild-gold">Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="guild-name">Guild Name</Label>
                    <Input 
                      id="guild-name" 
                      placeholder="Enter guild name"
                      className="bg-guild-shadow/50 border-guild-stone"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guild-tag">Guild Tag</Label>
                    <Input 
                      id="guild-tag" 
                      placeholder="[TAG] (3-5 chars)"
                      className="bg-guild-shadow/50 border-guild-stone"
                      maxLength={5}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Guild Emblem</Label>
                  <div className="grid grid-cols-6 gap-3">
                    {guildEmblems.map((emblem, index) => (
                      <button
                        key={index}
                        className="aspect-square bg-guild-shadow/50 border border-guild-stone rounded-lg hover:border-guild-gold transition-colors flex items-center justify-center text-2xl"
                      >
                        {emblem.icon}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Guild Description</Label>
                  <Textarea 
                    id="description"
                    placeholder="Describe your guild's purpose and values..."
                    className="bg-guild-shadow/50 border-guild-stone min-h-[100px]"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="recruitment">Recruitment</Label>
                    <Select>
                      <SelectTrigger className="bg-guild-shadow/50 border-guild-stone">
                        <SelectValue placeholder="Select recruitment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="open">Open to All</SelectItem>
                        <SelectItem value="invite">Invite Only</SelectItem>
                        <SelectItem value="application">Application Required</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-members">Max Members</Label>
                    <Select>
                      <SelectTrigger className="bg-guild-shadow/50 border-guild-stone">
                        <SelectValue placeholder="Maximum guild size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20">20 members</SelectItem>
                        <SelectItem value="30">30 members</SelectItem>
                        <SelectItem value="40">40 members</SelectItem>
                        <SelectItem value="50">50 members</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guild Strategy */}
            <Card className="bg-guild-shadow/30 border-guild-stone">
              <CardHeader>
                <CardTitle className="font-cinzel text-guild-gold flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Guild Strategy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="specialization">Combat Specialization</Label>
                  <Select>
                    <SelectTrigger className="bg-guild-shadow/50 border-guild-stone">
                      <SelectValue placeholder="Choose your guild's specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aggressive">Aggressive Assault</SelectItem>
                      <SelectItem value="defensive">Defensive Fortress</SelectItem>
                      <SelectItem value="stealth">Stealth Operations</SelectItem>
                      <SelectItem value="strategic">Strategic Planning</SelectItem>
                      <SelectItem value="adaptable">Adaptable Tactics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tactics">Default Battle Tactics</Label>
                  <Textarea 
                    id="tactics"
                    placeholder="Describe your guild's default battle approach (will be encrypted in tournaments)"
                    className="bg-guild-shadow/50 border-guild-stone min-h-[80px]"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="formation">Preferred Formation</Label>
                    <Select>
                      <SelectTrigger className="bg-guild-shadow/50 border-guild-stone">
                        <SelectValue placeholder="Formation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="offensive">Offensive Line</SelectItem>
                        <SelectItem value="defensive">Defensive Wall</SelectItem>
                        <SelectItem value="flanking">Flanking Maneuver</SelectItem>
                        <SelectItem value="guerrilla">Guerrilla Warfare</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Combat Priority</Label>
                    <Select>
                      <SelectTrigger className="bg-guild-shadow/50 border-guild-stone">
                        <SelectValue placeholder="Priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="speed">Speed</SelectItem>
                        <SelectItem value="power">Power</SelectItem>
                        <SelectItem value="defense">Defense</SelectItem>
                        <SelectItem value="balance">Balance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="leadership">Leadership Style</Label>
                    <Select>
                      <SelectTrigger className="bg-guild-shadow/50 border-guild-stone">
                        <SelectValue placeholder="Style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="autocratic">Autocratic</SelectItem>
                        <SelectItem value="democratic">Democratic</SelectItem>
                        <SelectItem value="collaborative">Collaborative</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Guild Preview & Creation */}
          <div className="space-y-6">
            <Card className="bg-guild-shadow/30 border-guild-stone">
              <CardHeader>
                <CardTitle className="font-cinzel text-guild-gold">Guild Preview</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-6xl mb-4">🐉</div>
                <h3 className="font-cinzel text-xl text-foreground">[DRAG] Dragon's Fury</h3>
                <div className="flex justify-center gap-2">
                  <Badge variant="outline" className="border-guild-gold text-guild-gold">
                    Aggressive Assault
                  </Badge>
                </div>
                <Separator className="bg-guild-stone" />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Members</div>
                    <div className="font-semibold text-foreground">1/50</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Rank</div>
                    <div className="font-semibold text-foreground">Unranked</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Wins</div>
                    <div className="font-semibold text-foreground">0</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Power</div>
                    <div className="font-semibold text-foreground">1000</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-guild-shadow/30 border-guild-stone">
              <CardHeader>
                <CardTitle className="font-cinzel text-guild-gold">Creation Cost</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-guild-gold mb-2">1,000 ETH</div>
                  <p className="text-sm text-muted-foreground">
                    One-time guild creation fee
                  </p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Base Creation:</span>
                    <span className="text-foreground">800 ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Blockchain Registration:</span>
                    <span className="text-foreground">150 ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Encryption Setup:</span>
                    <span className="text-foreground">50 ETH</span>
                  </div>
                  <Separator className="bg-guild-stone" />
                  <div className="flex justify-between font-semibold">
                    <span className="text-foreground">Total:</span>
                    <span className="text-guild-gold">1,000 ETH</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary text-primary-foreground font-semibold">
                  Create Guild
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-guild-shadow/30 border-guild-stone">
              <CardContent className="pt-6">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-guild-gold">
                    <Shield className="w-4 h-4" />
                    <span className="font-medium">Guild Benefits</span>
                  </div>
                  <ul className="space-y-1 text-muted-foreground ml-6">
                    <li>• Participate in tournaments</li>
                    <li>• Recruit up to 50 members</li>
                    <li>• Encrypted strategy storage</li>
                    <li>• Guild ranking system</li>
                    <li>• Blockchain rewards</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <TorchFooter />
    </div>
  );
};

export default CreateGuild;