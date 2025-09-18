import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Shield, Users, Clock } from "lucide-react";

interface GuildData {
  id: string;
  name: string;
  members: number;
  isEncrypted: boolean;
  status: "ready" | "pending" | "matched";
}

const mockGuilds: GuildData[] = [
  { id: "1", name: "Shadow Vanguard", members: 12, isEncrypted: true, status: "ready" },
  { id: "2", name: "Iron Covenant", members: 15, isEncrypted: true, status: "ready" },
  { id: "3", name: "Mystic Forge", members: 8, isEncrypted: false, status: "pending" },
  { id: "4", name: "Storm Raiders", members: 20, isEncrypted: true, status: "matched" },
];

export const TournamentBracket = () => {
  return (
    <section className="py-16 bg-gradient-tournament">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-cinzel font-bold text-guild-gold mb-4">
            Active Tournaments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Current guild matchups with encrypted strategies. Member lists and tactics will be revealed at battle start.
          </p>
        </div>

        {/* Tournament Status */}
        <div className="mb-8 p-6 bg-guild-shadow/60 rounded-lg border border-guild-stone">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-cinzel font-semibold text-guild-gold">
              Championship Quarter-Finals
            </h3>
            <div className="flex items-center space-x-2 text-guild-ember">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Battle starts in 2:34:17</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Match 1 */}
            <Card className="bg-guild-shadow border-guild-stone">
              <CardHeader className="pb-3">
                <CardTitle className="text-center text-guild-gold font-cinzel">
                  Match 1
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Guild 1 */}
                  <div className="flex items-center justify-between p-4 bg-guild-stone/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-guild-purple" />
                      <div>
                        <h4 className="font-semibold text-foreground">Shadow Vanguard</h4>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Users className="w-3 h-3" />
                          <span>12 members</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Lock className="w-4 h-4 text-guild-gold" />
                      <Badge variant="secondary" className="bg-guild-gold/20 text-guild-gold">
                        Encrypted
                      </Badge>
                    </div>
                  </div>

                  <div className="text-center text-guild-ember font-cinzel">VS</div>

                  {/* Guild 2 */}
                  <div className="flex items-center justify-between p-4 bg-guild-stone/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-guild-ember" />
                      <div>
                        <h4 className="font-semibold text-foreground">Iron Covenant</h4>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Users className="w-3 h-3" />
                          <span>15 members</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Lock className="w-4 h-4 text-guild-gold" />
                      <Badge variant="secondary" className="bg-guild-gold/20 text-guild-gold">
                        Encrypted
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Match 2 */}
            <Card className="bg-guild-shadow border-guild-stone">
              <CardHeader className="pb-3">
                <CardTitle className="text-center text-guild-gold font-cinzel">
                  Match 2
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Guild 3 */}
                  <div className="flex items-center justify-between p-4 bg-guild-stone/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-guild-purple" />
                      <div>
                        <h4 className="font-semibold text-foreground">Mystic Forge</h4>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Users className="w-3 h-3" />
                          <span>8 members</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-muted text-muted-foreground">
                      Pending
                    </Badge>
                  </div>

                  <div className="text-center text-guild-ember font-cinzel">VS</div>

                  {/* Guild 4 */}
                  <div className="flex items-center justify-between p-4 bg-guild-stone/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-guild-ember" />
                      <div>
                        <h4 className="font-semibold text-foreground">Storm Raiders</h4>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Users className="w-3 h-3" />
                          <span>20 members</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Lock className="w-4 h-4 text-guild-gold" />
                      <Badge variant="secondary" className="bg-guild-gold/20 text-guild-gold">
                        Encrypted
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Encryption Notice */}
        <div className="bg-guild-shadow/40 border border-guild-gold/30 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-3">
            <Lock className="w-6 h-6 text-guild-gold" />
            <h3 className="text-lg font-cinzel font-semibold text-guild-gold">
              Encryption Protocol Active
            </h3>
          </div>
          <p className="text-muted-foreground">
            Guild member rosters, strategic formations, and tactical plans are encrypted using blockchain technology. 
            All information will be automatically revealed when the tournament battle commences, ensuring fair play 
            and preventing strategy leaks.
          </p>
        </div>
      </div>
    </section>
  );
};